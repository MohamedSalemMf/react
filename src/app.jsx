import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './home';
import Movies from './movies';
import Tv from './tv';
import Notfound from './notfound';
import Movie_id from './movie_id';
import Tvid from './tvid';

import Register from './register';
import Login from './login';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
    state = { }
  
    render() {
        return ( 
            <>         
                <Switch>
                    <ProtectedRoute path="/home" component={Home} /> 
                    <ProtectedRoute path="/movies" component={Movies} /> 
                    <ProtectedRoute path="/tv" component={Tv} />
                    <ProtectedRoute path="/Movie_id/:id" component={Movie_id}/>
                    <ProtectedRoute path="/Tvid/:id" component={Tvid}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>

                    <Route path="/notfound" component={Notfound}/>
                    <Redirect from="/" exact to="/register"/>
                    <Redirect to="/notfound"/>
                </Switch>
            </>
        );
    }
}
 
export default App;