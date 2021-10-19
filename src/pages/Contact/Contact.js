import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Contact.css';

const Contact = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='contact-us mt-5 py-5 container'>
            <h1 className="text-center">Contact Us</h1>
            <div className="row d-flex  flex-column flex-lg-row flex-md-row">
                <div className=" col-md-4">
                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name", { required: true })} />
                        <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className='error'>This field is required</span>}
                        <input placeholder="Your Address" {...register("address")} />
                        <input placeholder="City" {...register("city", { required: true })} />
                        <input type="submit" />
                    </form>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Contact;