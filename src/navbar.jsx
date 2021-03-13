import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <NavLink className="navHMTO" to="/home"><span className="digital-ocean "><i className="fab fa-digital-ocean"></i></span><span className="scar">scar...</span></NavLink>
                    <button className="navbar-toggler bottonNav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fab fa-digital-ocean"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item  ml-3">
                                <NavLink activeClassName="navColor" className="nav-link navHMT scar" to="/home">Home</NavLink>
                            </li>               
                            <li className="nav-item ml-3">
                                <NavLink activeClassName="navColor" className="nav-link navHMT scar" to="/movies">Movies</NavLink>
                            </li>                       
                            <li className="nav-item  ml-3">
                                <NavLink activeClassName="navColor" className="nav-link navHMT scar" to="/tv">Tv</NavLink>
                            </li>
                            <li className="nav-item  ml-3">
                                <NavLink className=" scar text-light Sign btn btn-warning px-3" to="/register">signOut</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>      
            </nav>
        );
    }
}
 
export default Navbar;