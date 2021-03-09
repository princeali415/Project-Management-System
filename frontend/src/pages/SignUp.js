import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../schema/signUpValidation";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../8SignInLogo.svg'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SuccessAlertSignUp from '../components/Alert/SuccessAlertSignUp'
import ErrorAlertSignUp from '../components/Alert/ErrorAlertSignUp'




const initialFormValues = {
    username: "",
    email: "",
    password: "",
    userrole: {
        roletypeid: 0,
        roletype: ""
    }
};

const initialFormErrors = {
    username: "",
    email: "",
    password: "",
    userrole: {
        roletypeid: 0,
        roletype: ""
    }
};

const initialDisabled = true;

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
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
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function SignUp(props) {

    const classes = useStyles();

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [alert, setAlert] = useState("none")

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

    const handleSignUp = (userInfo) => {
        axios
          .post("https://hali-projectmanagementsystem.herokuapp.com/createaccount", userInfo)
          .then((res) => {
            setAlert("Success")
          })
          .catch((err) => {
            setAlert("Error")
          });
      };

    const update = (evt) => {
        const {name, value} = evt.target;
        updateForm(name, value)
    }

    useEffect(() => {
        schema.isValid(formValues)
        .then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues])

    const submitForm = () => {
        handleSignUp(finalForm)
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitForm();
    }

    const pm = {
        userrole: {
          roletypeid: 1,
          roletype: "Project Manager"
        }
      }
      const dev = {
        userrole: {
          roletypeid: 2,
          roletype: "Developer"
        }
      }

    let finalForm;
    if(formValues.userrole === 1) finalForm = {...formValues, ...pm};
    if(formValues.userrole === 2) finalForm = {...formValues, ...dev};

    return (
    <>
    {alert === "Success" ? <SuccessAlertSignUp ></SuccessAlertSignUp> : <></>}
    {alert === "Error" ? <ErrorAlertSignUp ></ErrorAlertSignUp> : <></>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          
            <img src={logo} alt="logo for website" className={classes.logo} />

          <form className={classes.form} onSubmit={onSubmit}>
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
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              name="email"
              type="email"
              value={formValues.email}
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
            <FormControl variant="outlined" className={classes.form}>
            <InputLabel htmlFor="userrole">Userrole</InputLabel>
            <Select
             variant="outlined"
             margin="normal"
             fullWidth
             name="userrole"
             label="Userrole"
             type="userrole"
             id="userrole"
             value={formValues.userrole}
             onChange={update}
            >
            <MenuItem value={formValues.userrole} onChange={update}>-----Userrole-----</MenuItem>
            <MenuItem value={1}>Project Manager</MenuItem>
            <MenuItem value={2}>Developer</MenuItem>
            </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}
            >
              Register
            </Button>
            <Link onClick={() => history.push("/")} style={{color:'blue', cursor:'pointer'}}>
                <p>Already have an account? Login</p>
            </Link>
          </form>
        </div>
      </Container>
    </>
    )
}
