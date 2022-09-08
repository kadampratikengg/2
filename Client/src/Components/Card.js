import React from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './Signupform'
function Card() {
  const navigate = useNavigate()
  return (
    <div className="row">
      <div className="">
        <div className="card border border-danger">
          <div className="card-body bg-success text-dark bg-opacity-25" style={{height: "350px"}}>
          <button type="button" className="open me-5">Customer Login</button>
          <button type="button" className="open me-5">Authorize User</button>  
            <form className="px-4 py-3">
                <div className="mb-3">
                  <label htmlFor="exampleDropdownFormEmail1" className="form-label">User Name :</label>
                  <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="User"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password :</label>
                  <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                  <label className="form-check-label"  htmlFor="dropdownCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-5">Sign In</button>
              <button  className="btn btn-primary ms-5" onClick={()=>navigate("/Signupform")}>Sign Up</button>
              
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Forgot password?</a>  
          
          </div>
        </div>
      </div> 
    </div>
  )
}
export default Card
