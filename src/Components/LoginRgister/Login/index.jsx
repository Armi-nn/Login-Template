import React from "react";
import './style.css'
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
export default function Login({handelPageType}) {
  
 const initialValues={
   username:'',
   password:'',
 }

  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={(values)=>{
        alert(JSON.stringify(values))
      }}
      validationSchema={Yup.object({
        username:Yup.string().max(10,'too long').required(),
        password:Yup.string().max(10,'too long').required()
      })}
    >

      <div  className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <Form action="#">
            <div className="input-box">
              <span className="icon">
                <box-icon type="solid" name="envelope"></box-icon>
              </span>
              <Field name="username" type="text" placeholder="username"/>
              <ErrorMessage name="username" component={'div'}/>
            </div>
            <div className="input-box">
              <span className="icon">
                <box-icon type="solid" name="lock-alt"></box-icon>
              </span>
              <Field name="password" type="text" placeholder="password"/>
              <ErrorMessage name="password" component={'div'}/>
            </div>
            <div className="remember-forget">
              <label>
                {" "}
                <input type="checkbox" />
                Remimember me{" "}
              </label>
              <a href="#">Froget password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <a style={{
                  cursor:"pointer"
                }} onClick={handelPageType} className="register-link">
                  
                  Register
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
    </>
  );
}
