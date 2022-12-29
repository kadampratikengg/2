import React from 'react'
function Card() {
  return (
    <div className="row">
      <div className="" >
        <div className="card border border-danger">
          <div className="card-body  bg-light text-dark bg-opacity-25 " style={{height: "350px"}}>
            <h3 className="card-title my-title text-center">Guest User</h3>
            <div className="mb-3 px-4 py-3">
              <label htmlFor="Mobile" className="form-label">Mobile Number :</label>
              <input type="tel" className="form-control" id="Mobile" placeholder="Enter Your Mobile Number"/> <br/>
              <label htmlFor="traking" className="form-label">Traking id :</label>
              <input type="email" className="form-control" id="traking" placeholder="Enter Your Traking id"/> <br/>              
              <a href="#" className="btn btn-primary ">Search</a>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card