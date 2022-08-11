import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import auth from "../../firebase/firebase.init";
import Loading from "../loading/Loading";
import Social from "./social/Social";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
      auth
    );

if (loading||sending){
  return <Loading/>;
};

// let errorElement;
//     if (error||errorReset) {
//      errorElement=  <p className='text-danger'>Error: {error?.message} {errorReset?.message}</p>
//   };
if(error||errorReset){
   console.log(error)
  switch(error?.code){
      case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
      case "auth/user-not-found":
          toast("user not exist,Please sign up");
          break;
      
      case "auth/invalid-password":
          toast("Wrong password. Intruder!!")
          break;
      case "auth/wrong-password":
          toast("password is incorrect,please try again")
          break;
      case "undefined":
          toast("e-mail is required")
          break;
      default:
          toast("something went wrong")
  }
};

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateSignUp = (e) => {
    navigate("/signup");
  };

  const resetPassword= async (e)=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast('Sent email');
  }

  return (
    <div className="container w-50 mx-auto my-2 border rounded" style={{ height: "580px" }}>
      <ToastContainer/>
      <h1 className="text-info">Please Login</h1>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ height: "300px", width: "75%",textAlign:"center"}}>
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

        <Button className='w-50 text-white' variant="info" type="submit">
          Login
        </Button>
      </Form>
      {/* {errorElement} */}
      <p>
        New to Genius Car?
        <Link
          to="/signup"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateSignUp}
        >
          Please Sign Up
        </Link>
      </p>
      <p>
        Forget password?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </Link>
      </p>
      <Social></Social>
    </div>
  );
};

export default Login;
