import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { NavLink } from 'react-router-dom';


import powerslap2 from "./video/Disney_s Raya and the Last Dragon _ Official Trailer(1080P_HD).mp4";




import authentication from './authentication';

import SecureLS from 'secure-ls';
let ls = new SecureLS({ encodingType: 'aes' });

class Login extends Component {
    state = {
        email: '',	
        password: '',
        error: '',
    }
  
    validateLoginForm = () => {
        
        let shcema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')).required(),
        });
        let state = { ...this.state };
        delete state.error;
        return shcema.validate(state, { abortEarly: false });
    }

    sendLoginData = async () => {
        let state = { ...this.state };
        delete state.error;
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', state)

        if (data.message === 'success') {
            ls.set('currentUser' , data.token);
      
            authentication.logIn(()=>{
                this.props.history.replace('/home')
            })
            //toast.success("Success");
        }
        else {
            this.setState({
               error:data.message,
            })
        }
    }
    //=============================
    loginFormChange = (e) => {
        let state = { ...this.state };
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    submitLoginForm = (e) => {
        e.preventDefault();
        let validationResponse = this.validateLoginForm();

        if (validationResponse.error) {
            let state = { ...this.state };
            state.error = validationResponse.error;
            this.setState(state);
        }
        else {
            this.sendLoginData();
        }
       // console.log(validationResponse)
    }
    render() {
        return (
            <>
                <div className="layer">
                        <video autoPlay loop  className="videoMonster position-absolute">
                            <source src={powerslap2} type="video/mp4" />
                        </video>
                    
                    <div className="container">
                            <NavLink className="navHMTO" to="/login"><span className="digital-ocean"><i className="fab fa-digital-ocean"></i></span><span className="scar">scar...</span></NavLink>
                            <NavLink className="Sign text-light btn btn-warning position" to="/register">Create a new account</NavLink>
                            <div className="formRegister">
                                <div className="  d-flex justify-content-center  w-50">
                                <h5 className="  ">Exclusive number of movies, TV shows,  programs and more.<br/>Watch anywhere.</h5>
                            </div>
                            <form  onSubmit={this.submitLoginForm}  className="w-75  pb-4">
                            {this.state.error && <div className="alert alert-danger text-center">{this.state.error.message}Check "Email" And "Password" Please try again ...</div>}
                            
                                <label htmlFor="email">email </label>
                                <input name="email" id="email" type="email" onChange={this.loginFormChange} value={this.state.email} className="form-control w-50 mb-3" />
                                
                                <label htmlFor="password">password </label>
                                <input name="password" id="password" type="password" onChange={this.loginFormChange} value={this.state.password} className="form-control w-50  mb-3" /> 
                                
                                <button type="submit" className="btn btn-info mr-4">submit</button>  
                            </form>
                        </div> 
                    </div> 
                </div> 
                
            </>
        );
    }
}
export default Login;