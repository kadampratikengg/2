import React from 'react'
function Card() {
  return (
    <div className="row">
      <div className="" >
        <div className="card border border-danger">
          <div className="card-body  bg-info text-dark bg-opacity-25 " style={{height: "350px"}}>
            <h3 className="card-title my-title text-center">Guest User</h3>
            <div className="mb-3 px-4 py-3">
              <label htmlFor="exampleDropdownFormEmail12" className="form-label">Mobile Number :</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail12" placeholder="Enter Your Mobile Number"/> <br/>
              <a href="#" className="btn btn-primary ">Search</a>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card