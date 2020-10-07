import React, { Component,useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const AdvancedForm = () => {
    const [formState,setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false,
    })

    // add a schema for form validation 
    const formSchema = yup.object().shape({
        name:yup.string().required("Name is required."),
        email:yup.string().email().required("email is required"),
        password:yup.string().min(8).required("password required to be 8 characters"),
        terms:yup.boolean().oneOf([true])
    })
    return(
        <form>
            <label htmlFor="name">Name </label>
            <input
                type="text"
                id="name"
                name="name"
                required
            /><br/>
            <label htmlFor="email">Email </label>
            <input
                type="email"
                id="email"
                name="name"
                required
            /><br/>
            <label htmlFor="pass">Password </label>
            <input 
                type="password"
                id="pass"
                name="password"
                required
            /><br/>
            <label htmlFor="terms">Terms & Conditions</label>
            <input
                type="checkbox"
                id="terms"
                name="terms"
                required
            /><br/>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default AdvancedForm;