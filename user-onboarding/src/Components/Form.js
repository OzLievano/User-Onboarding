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

    const [errors,setErrors] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })

    const [users,setUsers] = useState([])

    const validateChange = (e) =>{
        yup.reach(formSchema,e.target.name)
        .validate(
            e.target.type==="checkbox"?e.target.checked : e.target.value
        )
        .then((valid)=>{
            setErrors({...errors,[e.target.name]:""})
        })
        .catch((err)=>{
            setErrors({...errors,[e.target.name]:err.errors[0]})
        })
    }

    const submitForm = (e)=>{
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users",formState)
        .then((resp)=>{
            console.log(resp)
            setUsers(resp.data)
            setFormState({
                name:"",
                email:"",
                password:"",
                terms:false
            })
        })
    }

    const formSchema = yup.object().shape({
        name:yup.string().required("Name is required."),
        email:yup.string().email(),
        password:yup.string(),
        terms:yup.boolean().oneOf([true])
    });

    const inputChange = (e) =>{
        e.persist();
        const newForm = {
            ...formState,
            [e.target.name]:e.target.type==="checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newForm);
    }
    return (
        <form onSubmit={submitForm}>
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
                id="password"
                type="password"
                name="password"
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
            <button type="submit">SUBMIT</button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </form>
    )
}

export default AdvancedForm;