import React, { Component,useState,useEffect } from 'react';
import * as yup from 'yup';
import {Form, FormGroup,Label, Input,FormText, Button} from 'reactstrap' 
import axios from 'axios';

const AdvancedForm = () => {
    const [formState,setFormState] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })

    const [serverError, setServerError] = useState("");

    const [errors,setErrors] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    })

    const [users,setUsers] = useState([]);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

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
        .catch((err)=>{
            setServerError("oops! something happened!");
        })
    }

    const formSchema = yup.object().shape({
        name:yup.string().required("Name is required."),
        email:yup.string().email(),
        password:yup.string(),
        terms:yup.boolean().oneOf([true])
    });

    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
          console.log("is my form valid?", valid);
    
          // valid is a boolean
          // !true === false
          // !false === true
          // if the form is valid, and we take the opposite --> we do not want disabled btn
          // if the form is invalid (false) and we take the opposite (!) --> we will disable the btn
          setButtonIsDisabled(!valid);
        });
      }, [formState]);

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
        <Form onSubmit={submitForm}>
            {serverError && <p className="error">{serverError}</p>}
            <Label htmlFor="name">
                <FormText>Name</FormText> 
                <Input
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange= {inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </Label><br/>
            <Label htmlFor="email">
                <FormText>Email </FormText> 
                <Input
                id="email"
                type="text"
                name="email"
                value={formState.email}
                onChange= {inputChange}
                />
                {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
            </Label><br/>
            <Label htmlFor="pass">
                <FormText>Password</FormText>
                <Input
                id="password"
                type="password"
                name="password"
                value={formState.password}
                onChange= {inputChange}
                />
                {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
            </Label><br/>
            <Label htmlFor="terms">
            <FormText>
                Terms & Conditions<br/>
            </FormText>
                <Input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formState.terms}
                onChange= {inputChange}
                />
                {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}
            </Label><br/><br/>
            <Button type="submit" color="info" disabled={buttonIsDisabled}>SUBMIT</Button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </Form>
    )
}

export default AdvancedForm;