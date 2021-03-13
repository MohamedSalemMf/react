import React, { Component } from 'react';
import notfoundStyle from './notfound.module.css';
import Particles from 'react-particles-js';

class Notfound extends Component {
    state = {  }
    render() { 
        return (
                    <>
                        <Particles 
                      params={{
                            particles: {
                                line_linked: {
                                    shadow: {
                                        enable: true,   
                                        color: "#0ff",
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
                        <section className="vh-100 d-flex justify-content-center align-items-center">
                            <h1 className={`text-center ${notfoundStyle.bigFont}`}> 404 Notfound page </h1>
                        </section> 
                    </>
                );   
               
    }
}
export default Notfound;

