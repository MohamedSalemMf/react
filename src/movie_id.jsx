import React, { Component } from 'react';
import axios from 'axios';
import idStyleCss from './idStyle.module.css';
import Navbar from './navbar';
import Particles from 'react-particles-js';

class Movie_id extends Component {

    state = { 
        allmovies:[],
    }
    movieId = async ()=>
    {
        let r = await axios.get (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=70cc3605c1bfdbe61b4400d43bd33359`);
        //console.log(data);
        //console.log(r.data.title);
        this.setState({allmovies:r.data})
    }
    componentDidMount()
    {
        this.movieId();
    }
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
                <Navbar />
                <div className="container p-4">
  
                    <div className="positaion-relative">
                        <div className="row">
                            <div  className="col-md-4">
                                <div className="p-4">
                                    <img className={`w-100 ${idStyleCss.imgs}`} src={'https://image.tmdb.org/t/p/w500/'+this.state.allmovies.poster_path} alt=""/>
                                    <h1 className={`text-center ${idStyleCss.vote}`}>{this.state.allmovies.vote_average}</h1>
                                </div>
                            </div>

                            <div  className="col-md-8 py-2">
                                <h1 className="">{this.state.allmovies.title}</h1>
                                <h2 className="">{this.state.allmovies.original_name}</h2>
                                <h4 className={`py-3 ${idStyleCss.bigFont}`}>{this.state.allmovies.status}</h4>
                                <h5 className="">{this.state.allmovies.tagline}</h5>
                                <p className="py-3 ">{this.state.allmovies.overview}</p>
                                <h4 className="">language : {this.state.allmovies.original_language}</h4>
                                <div className="mt-4">
                                        <button type="button" className="btn btn-info bon mr-4">Download</button>
									    <button type="button" className="btn btn-light Contact ">Live</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Movie_id;
