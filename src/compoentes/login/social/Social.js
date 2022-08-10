import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle} from 'react-icons/fc'
import auth from '../../../firebase/firebase.init';
import Loading from '../../loading/Loading';
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate=useNavigate();
    const location = useLocation();

  let from = location.state?.from?.pathname || "/";

let errorElement;
    if (error) {
     errorElement=  <p className='text-danger'>Error: {error.message}</p>
  };
  if (loading) {
    return <Loading/>
}

    if (user){
        navigate(from, { replace: true })
    };


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
                <p className="mt-3 px-2">Or</p>
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
                
            </div>
            {errorElement}
            <div>
                <button
                onClick={()=>signInWithGoogle()} 
                className='btn btn-info text-white w-25'> <span className="px-2 m-1"><FcGoogle/></span>Sign in</button>
            </div>
        </div>
    );
};

export default Social;