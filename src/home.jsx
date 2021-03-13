import React, { Component } from 'react';
import Navbar from './navbar';
import axios from "axios";
import Particles from 'react-particles-js';

class Home extends Component {
state = { 
    movies:[],
    tv:[],
}

navigateToUserDetails = (id) =>{
    this.props.history.push(`/Movie_id/${id}`);
}
navigateToUserDetailsTv = (id) =>{
    this.props.history.push(`/Tvid/${id}`);
}

getTrending = async (mediaType) =>
    {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)//فقط dataانا كده بقول عايز اللي راجع ال 
        //console.log(data.results);
        this.setState({[mediaType]:data.results})
    }
    componentDidMount()
    {
        this.getTrending('movies');
        this.getTrending('tv');
    }
    //search - movie============================================================
    getTrendingMovie = async (searchTerm)=>
    {
        let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=70cc3605c1bfdbe61b4400d43bd33359`)
        //console.log(data)
        this.setState({movies:data.results})
    }

    componentDidMountMovies()
    {
        this.getTrendingMovie( "e.target.value");
    }

getCategoryMovie=(e)=>{
    //console.log(e.target.value);
    let searchTerm = e.target.value
    this.getTrendingMovie(searchTerm)
}

//search - tv============================================================
getTrendingTv = async (searchTermTv)=>
{
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchTermTv}&api_key=70cc3605c1bfdbe61b4400d43bd33359`)
    //console.log(data)
    this.setState({tv:data.results})
}

componentDidMountTv()
{
    this.getTrendingTv( "e.target.value");
}

getCategoryTv=(e)=>{
    //console.log(e.target.value);
    let searchTermTv = e.target.value
    this.getTrendingTv(searchTermTv)
}

render() {
    let { movies , tv } = this.state;
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
            <section className="my-3" >
                <div className="container w-75">
                    <div className="row">
                        <div className="col-md-6 ">
                            <input onChange={this.getCategoryMovie} className="form-control indotSearsh  text-center " placeholder="get movies by word..."/>
                        </div>
                        <div className="col-md-6">
                            <input onChange={this.getCategoryTv} className="form-control indotSearsh text-center " placeholder="get tv by word..."/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                
                <div className="row py-4">
                    <div className="col-md-4 py-3">
                        <div className="brbr  w-50 mb-3"></div>
                        <h2 className="">trending<br/>Movies<br/>To Watch Right Now</h2>
                        <p className="pt-4 secondFontColor">most watched Movies by days</p>
                        <div className="brbr  mb-3"></div>
                    </div>
                
                    {movies.slice(0,10).map((movie)=>
                        <div className="col-md-2 py-3"  key={movie.id} onClick={()=> this.navigateToUserDetails(movie.id)}>
                            <div className="movie">
                                <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="w-100" alt=""/>
                                <h4 className="py-2 h6 text-center">{movie.title}{movie.name}</h4>
                                <div className="vote">{movie.vote_average}</div>
                            </div>
                        </div>
                    )}
                    
                </div>

                <div className="row py-4">
                    <div className="col-md-4 py-3">
                        <div className="brbr  w-50 mb-3"></div>
                        <h2 className="">trending<br/>Tv<br/>To Watch Right Now</h2>
                        <p className="pt-4 secondFontColor">most watched Tv by days</p>
                        <div className="brbr  mb-3"></div>
                    </div>

                    {tv.slice(0,10).map((movie)=>
                        <div className="col-md-2 py-3"  key={movie.id} onClick={()=> this.navigateToUserDetailsTv(movie.id)}>
                            <div className="movie">
                                <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="w-100" alt=""/>
                                <h4 className="py-2 h6 text-center">{movie.title}{movie.name}</h4>
                                <div className="vote">{movie.vote_average}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
        );
}
}

export default Home;