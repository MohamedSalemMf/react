//غير لم يسجل في الموقع او يكون مسجل في الموقع Tv او Movies او Home ده علشان امنع اي حد يوصل ل

import { Redirect, Route } from "react-router-dom";
import authentication from "./authentication";

const ProtectedRoute = ({component:Component , ...rest}) => {   
    let token = localStorage.getItem("currentUser");
    return (
        <Route {...rest}  render={(props)=> {
                
				if(authentication.isAthunticated() ||token) 
                {
                    return <Component {...props}/>  
                }
                else    
                {
                   return <Redirect to={{pathname:'/'  , state:{from:props.location} }} />
                }
        } }
        />
      );
}
export default ProtectedRoute;
