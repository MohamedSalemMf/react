import React, { Component } from 'react';
import Navbar from './navbar';
import axios from "axios";
import Particles from 'react-particles-js';

class Movies extends Component {
    state = { 
        movies:[],
    }
     //Api - movie============================================================
     getTrending = async (mediaType) =>
     {
         let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)//فقط dataانا كده بقول عايز اللي راجع ال 
        //console.log(data.results);
         this.setState({[mediaType]:data.results})//يجيب وهكذه Tvيجيب ولم اقول روح هات ال movies ده علشان لم اقول روح هات [mediaType]
     }
     componentDidMount()//هنا علشان افضل مكان هنا Apiبتاعت ال masodانا بكول ال
     {
         this.getTrending('movies');//moviesده وببعت ليها الmasod انا كده بكول ال 
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

    //id=> لم اضغط ع الصوره بيظهر بيانات الفيلم
    navigateToUserDetails = (id) =>{
        this.props.history.push(`/Movie_id/${id}`);
    }
    render() {
        let { movies } = this.state;
        return ( 
            <>
            <Navbar />
            <section className="my-3" >
                <div className="container w-50 m-auto">
                    <input onChange={this.getCategoryMovie} className="form-control indotSearsh  text-center " placeholder="get movies by word..."/>
                </div>
            </section>
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
           
            <div className="container">

                <div className="row py-4">
                    {movies.map((movie)=>
                        <div className="col-md-3 py-3" key={movie.id} onClick={()=> this.navigateToUserDetails(movie.id)}>
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
export default Movies;