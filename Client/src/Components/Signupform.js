import React,{useState} from 'react';
import '../style.css';

const Signupform = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
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
                        <input className="form__input" name="firstName" onChange={handleChange}  value={inputs.firstName} type="text" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input type="text" name="lastName" onChange={handleChange} value={inputs.lastName} id="lastName" className="form__input" placeholder="Last Name" />
                    </div>
                   
                   
                    <div className="UserId">
                        <label className="form__label" for="UserId">User ID</label>
                        <input className="form__input" type="text" id="UserId" placeholder="User ID" maxLength="15" />
                    </div>
                    <div className="Mobile Number">
                        <label className="form__label" for="Mobile Number">Mobile Number</label>
                        <input className="form__input" type="tel" id="Mobile Number"  placeholder="Mobile Number" maxLength="10" />
                    </div>

                </div>
                <div className="column">

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
                        <input className="form__input" type="text" id="GST" placeholder="GST" maxLength="15" />
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
