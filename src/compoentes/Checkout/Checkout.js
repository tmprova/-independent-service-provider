import { Toast } from 'bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
// import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./checkout.css";


const Checkout = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (e) => {
        
        toast.info("thank you,for reaching us");
    };

    
    return (
        
        <div>
            <ToastContainer/>
            <h1>Thank you for reaching us..</h1>
            
<div className="form-box">
<form className='form-group' onSubmit={handleSubmit(onSubmit)} >
<input {...register("firstName", { required: true, maxLength: 20 })} placeholder={'First name'}/>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })}  placeholder={'Last name'}/>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
        placeholder={'Select gender'}
        label={"gender"}
      </select>
      <input {...register("mail", { required: "Email Address is required" })}  placeholder={'e-mail'} />
      <input {...register("address", { required: "Address is required" })}  placeholder={'home address'} />
      <input type="number" {...register("phone number",{required:"phone number is required"})}  placeholder={'phone number'}/>
      <input className='btn btn-light w-50 mx-auto mt-4' type="submit" />
      </form>
     
</div>
 
        </div>
    );
};

export default Checkout;