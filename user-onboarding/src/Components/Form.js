import React, { Component } from 'react';


const AdvancedForm = () => {
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                required
            /><br/>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="name"
                required
            /><br/>
            <label htmlFor="pass">Password (8 characters minimum)</label>
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