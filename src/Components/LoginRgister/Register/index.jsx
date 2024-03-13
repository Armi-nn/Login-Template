import React from "react";
import style from "./style.mudole.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
export default function Register({ handelPageType }) {
 const initialValues={
    username:'',
    email:'',
    password:'',
  }
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={(values)=>{
      alert(JSON.stringify(values))
    }}
    validationSchema={Yup.object({
      username:Yup.string().max(10,'too long').required(),
      email:Yup.string().max(10,'too long'),
      password:Yup.string().max(10,'too long').required(),
    })}
    >
      <div className="wrapper wrapperr">
        <div className="form-box register">
          <h2>Registration</h2>
          <Form action="#">
            <div className="input-box">
              <span className="icon">
                <box-icon type="solid" name="user"></box-icon>
              </span>
              <Field name="username" type="text" placeholder="username" />
              <ErrorMessage name="username" component={"div"}/>
            </div>
            <div className="input-box">
              <span className="icon">
                <box-icon type="solid" name="envelope"></box-icon>
              </span>
              <Field name="password" type="password" placeholder="password" />
              <ErrorMessage name="password" component={"div"}/>
            </div>
            <div className="input-box">
              <span className="icon">
                <box-icon type="solid" name="lock-alt"></box-icon>
              </span>
              <Field name="email" type="email" placeholder="email" />
              <ErrorMessage name="email" component={"div"}/>
            </div>
            <div className="remember-forget">
              <label>
                {" "}
                <input type="checkbox" />
                Agree to the terms and condition{" "}
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={handelPageType}
                  className="login-link"
                >
                  Login
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
