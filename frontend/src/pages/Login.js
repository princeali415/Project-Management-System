import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../schema/loginValidation";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
    username: "",
    password: ""
};

const initialFormErrors = {
    username: "",
    password: ""
};

const initialDisabled = true;

export default function Login(props) {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

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
                console.log(res);
                props.setLoggedIn(true);
                localStorage.setItem('token', res.data.access_token);
                history.push("/dashboard")
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const update = (evt) => {
        const {name, value} = evt.target;
        updateForm(name, value)
    }


    return (
        <div>
            <h1>Login</h1>
        <form className="formContainer" onSubmit={handleLogin}>
          <label> 
            <input
              name="username"
              type="text"
              value={formValues.username}
              onChange={update}
              placeholder='Username'
            />
          </label>
          <br />
          <label>
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={update}
              placeholder='Password'
            />
          </label>
            <button className="loginBtn" disabled={disabled}>
                Login
            </button>
            <div className="errorContainer">
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
            </div>
      </form>
        </div>
    )
}
