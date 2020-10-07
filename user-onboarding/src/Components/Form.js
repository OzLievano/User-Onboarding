import React, { Component,useState,useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const AdvancedForm = () => {

    const [formState,setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false,
    })

    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);


    const validateChange = (e) => {
        yup
        .reach(formSchema,e.target.name)
        .validate(
            e.target.type==="checkbox" ? e.target.checked: e.target.value
        )
    }

    const inputChange = (e) => {
        e.persist();
        // e.target.name --> name of the input that fired the event
        // e.target.value --> current value of the input that fired the event
        // e.target.type --> type attribute of the input
        const newFormState = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    
        validateChange(e);
        setFormState(newFormState);
      };

      const formSubmit = (e) =>{

      }

      //disabled button until form is valid
      useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
          console.log("is my form valid?", valid);
          setButtonIsDisabled(!valid);
        });
      }, [formState]);
    
  
    
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
                value={formState.name}
                onChange={inputChange}
                required
            /><br/>
            <label htmlFor="email">Email </label>
            <input
                type="email"
                id="email"
                name="name"
                value={formState.email}
                onChange={inputChange}
                required
            /><br/>
            <label htmlFor="pass">Password </label>
            <input 
                type="password"
                id="pass"
                name="password"
                value={formState.password}
                onChange={inputChange}
                required
            /><br/>
            <label htmlFor="terms">Terms & Conditions</label>
            <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formState.terms}
                onChange={inputChange}
                required
            /><br/>
            <button type="submit" disabled={buttonIsDisabled}>SUBMIT</button>
        </form>
    )
}

export default AdvancedForm;