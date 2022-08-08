import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify"

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => toast.success("thank you,for reaching us");

    
    return (
        <div>
            <h1>this is checkout</h1>
<div className="d-block">
<form onSubmit={handleSubmit(onSubmit)} >
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
      <input type="submit" />
<ToastContainer></ToastContainer>
      </form>
</div>

        </div>
    );
};

export default Checkout;