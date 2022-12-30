import React, { useState } from 'react';
import '../style.css';

const Signupform = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs);
    }

    const handleSubmit = (event) => {
        console.log("hgyg")
        event.preventDefault();
        alert(inputs.firstName);
    }
    return (

        <div className="form">

            <h1>Sign Up</h1>

            <div className="row">
                <div className="column">

                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" name="firstName" onChange={handleChange} value={inputs.firstName} type="text" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input className="form__input" type="text" name="lastName" onChange={handleChange} value={inputs.lastName} id="lastName" placeholder="Last Name" />
                    </div>


                    <div className="UserId">
                        <label className="form__label" for="UserId">User ID</label>
                        <input className="form__input" type="text" name="UserId" onChange={handleChange} id="UserId" placeholder="User ID" maxLength="15" />
                    </div>
                    <div className="Mobile Number">
                        <label className="form__label" for="MobileNumber">Mobile Number</label>
                        <input className="form__input" type="tel" name="MobileNumber" onChange={handleChange} id="MobileNumber" placeholder="Mobile Number" maxLength="10" />
                    </div>
                    <div className="date">
                        <label className="form__label" for="date">Date</label>
                        <input className="form__input" name="date" onChange={handleChange} type="date" id="date" placeholder="Date"  />
                    </div>

                </div>
                <div className="column">

                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input className="form_input" type="email" name="email" onChange={handleChange} id="email" placeholder="Email" />
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password" name="password" onChange={handleChange} id="password" placeholder="Password" />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" name="password" onChange={handleChange} id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <div className="GST">
                        <label className="form__label" for="GST">GST</label>
                        <input className="form__input" type="text" id="GST" name="GST" onChange={handleChange} placeholder="GST" maxLength="15" />
                    </div>
                    <div className="select">
                        <label className="form__label" for="select">Select</label>
                        <input className="form__input" type="option" id="select" placeholder="select" maxLength="15" />
                        
                    </div>

                </div>
            </div>

            <div >
                <button type="submit" onClick={handleSubmit} class="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default Signupform
