import * as yup from "yup";

export default yup.object().shape({
    username: yup
    .string()
    .min(3, "Too Short")
    .max(15,"Too Long")
    .required("Required"),
    email: yup
    .string()
    .email()
    .required("Required"),
    password: yup
    .string()
    .min(6, "Too Short")
    .required("Required"),
    userrole: yup
    .string()
    .required("Required")
})