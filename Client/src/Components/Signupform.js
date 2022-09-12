import React from 'react';
import '../style.css';

const Signupform =() => {
    return (
        <div className="form">
            <h1>Sign Up</h1>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
                </div>
                <div className="Mobile Number">
                    <label className="form__label" for="Mobile Number">Mobile Number</label>
                    <input className="form__input" type="tel" id="Mobile Number" placeholder="Mobile Number" maxLength ="10" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <div className="GST">
                    <label className="form__label" for="GST">GST</label>
                    <input className="form__input" type="text" id="GST" placeholder="GST" />
                </div>
            </div>
            <div >
                <button type="submit" class="btn btn-secondary">Next</button>
            </div>
        </div>
)}

export default Signupform
