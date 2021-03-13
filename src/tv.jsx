import React, { Component } from 'react';
import Navbar from './navbar';
import axios from "axios";
import Particles from 'react-particles-js';

class Tv extends Component {
    state = { 
        tv:[],
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
        this.getTrending('tv');//moviesده وببعت ليها الmasod انا كده بكول ال 
    }

    //search - tv============================================================
    getTrendingTv = async (tv)=>
    {
        let {data} = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${tv}&api_key=70cc3605c1bfdbe61b4400d43bd33359`)
        //console.log(data)
        this.setState({tv:data.results})
    }

    componentDidMountTv()
    {
        this.getTrendingTv( "e.target.value");
    }

    getCategoryTv=(e)=>{
        //console.log(e.target.value);

        let tv = e.target.value
        this.getTrendingTv(tv)
    }

    //id=> لم اضغط ع الصوره بيظهر بيانات الفيلم
    navigateToUserDetailsTv = (id) =>{
        this.props.history.push(`/Tvid/${id}`);
    }
    render() { 
        let { tv } = this.state;
        return ( 
        
                <>
                    <Navbar />
                    <section className="my-3" >
                        <div className="container w-50 m-auto">
                            <input onChange={this.getCategoryTv} className="form-control indotSearsh text-center " placeholder="get tv by word..."/>
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
                     {tv.map((movie)=>
                        <div  key={movie.id} onClick={()=> this.navigateToUserDetailsTv(movie.id)} className="col-md-3 py-3">
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

export default Tv;