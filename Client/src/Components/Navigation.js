import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <>
            <nav class="navbar navbar-inverse  navbar-expand-lg" style={{marginBottom: "00px", borderRadius: '0px'}}>
                <a class="navbar-brand" href="/Home">Servicing Hub</a>
              
                { <button class="navbar-toggler btn-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation ">
                    <span class="navbar-toggler-icon"></span>
                </button> }

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="nav navbar-nav d-inline">
                        <li><Link to="/Home">Home </Link></li>
                        <li><Link to="/About">About </Link></li>
                        <li><Link to="/Services">Services </Link></li>
                        <li><Link to="/Contact">Contact </Link></li>
                    </ul>
                    {/* <form class="navbar-form navbar-left" action="/action_page.php">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                        <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i>
                        </button>
                    </form> */}

                    <ul className="nav navbar-nav navbar-right d-inline ">
                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><span className="glyphicon   glyphicon-log-in" ></span> Login </a></li>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <Card />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <li><a href="#" data-toggle="modal" data-target="#exampleModal2"><span className="glyphicon glyphicon-user"></span> Guest</a></li>
                        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <Card1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>






        </>
    )
}
export default Navigation