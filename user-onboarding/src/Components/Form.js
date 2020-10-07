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
                <input id="name" type="text">Name</input>
            </label>
        </form>
    )
}

export default AdvancedForm;