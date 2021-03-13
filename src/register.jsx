import React, { Component } from 'react';
import axios from "axios";
import Joi from 'joi';
import { NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';


class Register extends Component {
    state = { 
        first_name:'',
        last_name:'',
        age:'',
        email:'',
        password:'',
        error:''
    }
     validateRegisterForm = ()=>    //submit علشان ال submitRegsiterForm بتاع ال function في ال callو انا هعمل ال 
     {
		let shcema = Joi.object({
		 
			first_name:Joi.string().min(3).max(10).required(),
			last_name:Joi.string().min(3).max(10).required(),
			age:Joi.number().integer().min(10).max(100).required(),
			email:Joi.string().email({tlds: { allow: ['com', 'net'] } }),
			password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')).required(),

		});

        let state = {...this.state};
		delete state.error;

      return shcema.validate(state, {abortEarly :false});
    }
    //===============================
    //Apiهبعتها ل ال stateمن ال dataده علشان ال 
    sendRegsiterData = async ()=>
    {
        let state = {...this.state};
        delete state.error;
        
        let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup' ,state )
            if(data.message === 'success') 
            {
                this.props.history.replace('/login');                
            }
            else
            {
               
            }
    }
    //==============
    registerFormChange = (e)=>
    {
		let state ={...this.state};	
        state[e.target.name] = e.target.value;
		this.setState(state);
    }

    //===============
    // buttonاللي في ال submit ده علشان 
    submitRegsiterForm = (e)=>
    {
        e.preventDefault();
        let validationResponse =  this.validateRegisterForm();

        if(validationResponse.error)
        {
            let state = {...this.state};
            state.error = validationResponse.error;
            //console.log(state.error)
            this.setState(state);
        }
        else
        {
           this.sendRegsiterData();
        }
        //console.log(validationResponse)
    }
    render() { 
        return ( 
            <>
               <div className="slideRegister" data-ride="carousel">
                    <div className="layeRegister">
                        <div className="container">   
                            <NavLink className="navHMTO" to="/register"><span className="digital-ocean"><i className="fab fa-digital-ocean"></i></span><span className="scar">scar...</span></NavLink>
                            <NavLink className="Sign position text-light btn btn-warning" to="/login">Sign in</NavLink>
                            <Particles 
                                params={{
                                        particles: {
                                            line_linked: {
                                                shadow: {
                                                    enable: true,
                                                    color: "#17a1b73d",
                                                    blur: 5
                                                }
                                            }
                                        }
                                    }}
                                style={{
                                    width: '100%',
                                    height: '100vh', 
                                    position: 'fixed'
                                }}
                            />
                            <div className="formRegister ">
                                <div className="  d-flex justify-content-center w-50">
                                    <h5>Watch exclusive movies and TV shows on your phone, tablet, laptop or even on your TV.</h5>
                                </div>
                                <form  onSubmit={this.submitRegsiterForm} className="w-75  pb-4">
                                    {this.state.error && <div className="alert alert-danger text-center">{this.state.error.message}</div>}
                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="firstName">firstName </label>
                                            <input id="firstName" name="first_name" type="text" onChange={this.registerFormChange} value={this.state.first_name} className="form-control mb-3"  />
                                    
                                            <label htmlFor="lastName">lastName </label>
                                            <input id="lastName" name="last_name" type="text" onChange={this.registerFormChange} value={this.state.last_name} className="form-control  mb-3"  />
                                        
                                            <label htmlFor="Age">Age </label>
                                            <input id="Age" name="age" type="number" onChange={this.registerFormChange} value={this.state.age} className="form-control  mb-3"  />
                                            </div>
                                            <div className="col-md-6">
                                            
                                            <label htmlFor="email">email </label>
                                            <input id="email" name="email" type="email" onChange={this.registerFormChange} value={this.state.email} className="form-control  mb-3"  />
                                
                                            <label htmlFor="password">password </label>
                                            <input id="password" name="password" type="password" onChange={this.registerFormChange} value={this.state.password} className="form-control  mb-3 "  />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info px-5 ">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Register;