import React from 'react'
function Card() {
  return (
    <div className="row">
      <div className="" >
        <div className="card border border-danger">
          <div className="card-body  bg-light text-dark bg-opacity-25 " style={{ height: "350px" }}>
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
              <p className="signup text-right">
                <a href="/Forget">Forget Password</a></p>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <br></br>
              <p className="signup text-center">
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