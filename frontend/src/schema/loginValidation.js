import * as yup from "yup";

export default yup.object().shape({
    username: yup.string()
    .min(3, "Username has to be atleast 3 characters long")
    .required("Username is required"),
    password: yup.string()
    .min(6, "Password has to be atleast 6 characters long")
    .required("Password is required")
})