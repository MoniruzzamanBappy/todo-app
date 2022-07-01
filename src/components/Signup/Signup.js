import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import SocialLogin from './../SocialLogin/SocialLogin';
import Loading from './../Loading/Loading';
import { useLocation } from 'react-router-dom';

const Signup = () => {
  const [match, setMatch] = useState('');
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passRef = useRef("");
  let errorElement;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const confirmPassRef = useRef("");
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSignupSubmit = async(e)=>{
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;
    if(password !== confirmPass){
      setMatch("Password didn't match");
            return;
      
    }
    else{
      setMatch('');
      await createUserWithEmailAndPassword(email, password);
      await sendEmailVerification();
    }
  }
  if(sending || loading){
    return <Loading></Loading>
  }
  if(error || error1){
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} {error1.message}</p>
      </div>
    );
  }
  if(user){
    navigate(from, { replace: true });
  }
  return (
    <div className="login-form">
      <h1 className="text-center">Please Create an Account</h1>
      <Form onSubmit={handleSignupSubmit} className="container log-container mx-auto">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={confirmPassRef} type="password" required placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group 
        onClick={() => setAgree(!agree)}
        className="mb-2" controlId="formBasicCheckbox">
          <Form.Check
            className={agree ? "text-primary" : "text-danger"}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <p className='text-danger'>{match}</p>
        {errorElement}
        <Button disabled={!agree} className="w-100" variant="primary" type="submit">
          Sign Up
        </Button>
        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Signup;
