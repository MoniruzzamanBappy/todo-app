import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {useLocation,useNavigate } from "react-router-dom";
import auth from './../../firebase.init';
import SocialLogin from './../SocialLogin/SocialLogin';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  let errorElement;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] =
    useSendPasswordResetEmail(auth);
  const handleToSignup = () => {
    navigate("/signup");
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
    
  };
  const handleToForgotPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);

      toast("Email Sent");
    }
    else{
      toast("Please Type Your Email");
    }
  };
  if(error){
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-form mt-0 pt-0">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handleLoginSubmit} className="container log-container mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" required placeholder="Password" />
        </Form.Group>
        <p className="mt-3">
          Dont have an account?{" "}
          <span className="text-primary click-here" onClick={handleToSignup}>
            Click here
          </span>
        </p>
        <p className="mt-3">
          Forgot password?{" "}
          <span
            className="text-primary click-here"
            onClick={handleToForgotPassword}
          >
            Click here
          </span>
        </p>
        {errorElement}
        <Button className="w-100" variant="primary" type="submit">
          Log In
        </Button>
        <SocialLogin></SocialLogin>
      </Form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
