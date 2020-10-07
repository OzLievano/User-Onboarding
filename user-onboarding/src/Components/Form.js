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

    const inputChange = (e) =>{
        e.persist();
        const newForm = {
            ...formState,
            [e.target.name]:e.target.type==="checkbox" ? e.target.checked : e.target.value
        };
        setFormState(newForm);
    }
    return (
        <form>
            <label htmlFor="name">
                Name 
                <input
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange= {inputChange}
                />
            </label><br/>
            <label htmlFor="email">
                Email 
                <input
                id="email"
                type="text"
                name="email"
                value={formState.email}
                onChange= {inputChange}
                />
            </label><br/>
            <label htmlFor="pass">
                Password
                <input
                id="pass"
                type="password"
                name="pass"
                value={formState.password}
                onChange= {inputChange}
                />
            </label><br/>
            <label htmlFor="terms">
                Terms & Conditions
                <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formState.terms}
                onChange= {inputChange}
                />
            </label><br/>
            <button>SUBMIT</button>
        </form>
    )
}

export default AdvancedForm;