import React from 'react'
function Card() {
  return (
    <div className="row">
      <div className="" >
        <div className="card border border-danger">
          <div className="card-body  bg-light text-dark bg-opacity-25 " style={{height: "350px"}}>
          <h3 className="card-title my-title text-center">Sign Up</h3>
            <div className="mb-3 px-4 py-3">
              
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>




        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="signup text-left">
          <a href="/Signupform">Forget Password</a>
        </p>
        <p className="signup text-right">
          <a href="/Signupform">Sign Up</a>
        </p>












            </div>   
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card