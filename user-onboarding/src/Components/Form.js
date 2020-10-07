import React, { Component,useState,useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const AdvancedForm = () => {
    const [formState,setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })
    return (
        <form>
            <label htmlFor="name">
                Name 
                <input
                id="name"
                type="text"
                name="name"
                />
            </label><br/>
            <label htmlFor="email">
                Email 
                <input
                id="email"
                type="text"
                name="email"
                />
            </label><br/>
            <label htmlFor="pass">
                Password
                <input
                id="pass"
                type="password"
                name="pass"
                />
            </label><br/>
            <label htmlFor="terms">
                Terms & Conditions
                <input
                id="terms"
                type="checkbox"
                name="terms"
                />
            </label><br/>
            <button>SUBMIT</button>
        </form>
    )
}

export default AdvancedForm;