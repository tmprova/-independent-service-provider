import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const SignUp = () => {


  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
const navigate = useNavigate();

const navigateLogin = () =>{
    navigate('/login');
}

if(user){
    navigate('/home');
}

const handleSignUp = event =>{
  event.preventDefault();
  const name = event.target.name.value;
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  createUserWithEmailAndPassword(email, password);
}


    return (
        <div className='container w-50 mx-auto'>
            <h1>this is signup</h1>
            <Form onSubmit={handleSignUp}>
         
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Your Name"  required/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default SignUp;<h1>this is signup</h1>