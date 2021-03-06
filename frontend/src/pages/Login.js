import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../schema/loginValidation";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ErrorAlert from "../components/Alert/ErrorAlert";
import logo from '../8SignInLogo.svg'

const initialFormValues = {
    username: "",
    password: ""
};

const initialFormErrors = {
    username: "",
    password: ""
};

const initialDisabled = true;

const useStyles = makeStyles((theme) => ({
    logo: {
        marginBottom: '20px'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function Login({setLoggedIn}) {
    const classes = useStyles();

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [alert, setAlert] = useState(false)

    const history = useHistory();

    const updateForm = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors,
                [name]:""
            });
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0]
            });
        });
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    useEffect(() => {
        schema.isValid(formValues)
        .then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues])

    const handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "/login",
                `grant_type=password&username=${formValues.username}&password=${formValues.password}`,
                {
                    headers: {
                        // btoa is converting our client id/client secret into base64
                        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                },
            )
            .then((res) => {
                localStorage.setItem('token', res.data.access_token);
                if(localStorage.getItem('token')){
                    localStorage.setItem('username', formValues.username)
                    setLoggedIn(true)
                }
                history.push("/tickets")
            })
            .catch((err) => {
                setAlert(true);
                setFormValues(initialFormValues)
            })
    };

    const update = (evt) => {
        const {name, value} = evt.target;
        updateForm(name, value)
    }
  
    return (
    <>
    { alert ? <ErrorAlert /> : <></>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          
            <img src={logo} alt="logo for website" className={classes.logo} />

          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
              autoFocus
              name="username"
              type="text"
              value={formValues.username}
              onChange={update}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={update}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}
            >
              Sign In
            </Button>
            <Link onClick={() => history.push("/signup")} style={{color:'blue', cursor:'pointer'}}>
                <p>Don't have an account? Sign Up</p>
            </Link>
          </form>
        </div>
      </Container>
    </>
    );
  }
