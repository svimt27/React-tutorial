import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userDetails from "../components/userDetails";

const Login = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formError, setFormError] = useState({});
  const [checkValidation, setValidation] = useState(false);
  const navigate = useNavigate();

  const getDetails = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // setFormError(validate(formValues));
  };

  //adding validation

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!values.username) {
      error.username = "UserName is required";
    }
    if (!values.password) {
      error.password = "Password is required!";
    }
    if (!values.email) {
      error.email = "Email is required !";
    } else if (!values.email.match(regex)) {
      error.email = "This email not a vaild email format!";
    }
    return error;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    userDetails.map((user) => {
      if (
        formValues.email === user.email &&
        formValues.password == user.password
      ) {
        localStorage.setItem("login", JSON.stringify(formValues));
        navigate("/dashboard/home");
        setValidation(false);
      } else {
        setValidation(true);
      }
    });
  };

  // this useEffect work multiple time
  useEffect(() => {
    console.log("HEllo");
  });

  // this useEffect work only one time
  // useEffect(() => {
  //   console.log("HEllo");
  // }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-300 to-blue-400 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-1/5">
        <div id="contactPage" className="section title">
          <h1 className="title-heading">
            Welcome to
            <span className="text-[#4E989F]"> Login</span> page...
          </h1>
          <p className="text-base text-red-500 my-2">
            {checkValidation ? "Wrong Email and Password!!" : ""}
          </p>
          <form className="contact-section" onSubmit={handelSubmit}>
            <div className="py-2">
              <label htmlFor="fullName" className="label-form">
                UserName
              </label>
              <input
                name="username"
                placeholder="UserName"
                className="input-form"
                autoComplete="off"
                onChange={getDetails}
              />
              <p className="text-sm text-red-500">{formError.username}</p>
            </div>
            <div className="py-2">
              <label htmlFor="workEmail" className="label-form">
                Email
              </label>
              <input
                name="email"
                placeholder="Enter Work Email"
                className="input-form"
                autoComplete="off"
                onChange={getDetails}
              />
              <p className="text-sm text-red-500">{formError.email}</p>
            </div>
            <div className="py-2">
              <label htmlFor="contactNumber" className="label-form">
                Password
              </label>
              <input
                name="password"
                placeholder="password"
                className="input-form"
                onChange={getDetails}
                type="password"
                autoComplete="off"
              />
              <p className="text-sm text-red-500">{formError.password}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4E989F] p-2 mt-3 text-white font-medium "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
