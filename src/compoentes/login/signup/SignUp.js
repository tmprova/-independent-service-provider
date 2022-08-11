/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form,  } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";

import { async } from "@firebase/util";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../loading/Loading";
import Social from "../social/Social";



const SignUp = () => {
  const [agree, setAgree] = useState(false);
// const name=useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [createUserWithEmailAndPassword, 
    user, 
    loading, 
    error] =useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth ,{sendEmailVerification:true});

 

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  // if (user) {
    
  // }
  if(loading||updating){
    return <Loading/>;
}

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name });
    toast('Updated profile');
navigate("/");
  };

  return (
    <div className="container w-50 mx-auto my-2 border rounded" 
    style={{ height: "600px" }}
    >
      <h1 className="text-info text-center">Please Signup</h1>
      <Form className='form-group mx-auto' onSubmit={handleSignUp} style={{ height: "350px", width: "75%" }}>
        <Form.Label></Form.Label>
        <Form.Control
        // ref={nameRef}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            className={agree ? "" : "text-danger"}
            label="Accept terms & Conditions"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          className="w-50 text-white"
          variant="info"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <ToastContainer/>
      <Social></Social>
    </div>
  );
};

export default SignUp;

