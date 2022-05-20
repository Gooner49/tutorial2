import React , {Component, useState} from 'react';
import './Counter.css'
import SubCounter from './SubCounter';
import Welcome from './Welcome';
import withRouter from './withRouter';
//import { BrowserRouter as Router , Route,Routes,  Link ,useNavigate , Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => 
{
  
  const [user, setUser] = useState({username: '', password: '' });
   
  let navigate = useNavigate(); 
    const routeChange = () =>
    { 
      var incr = user.password;
      var incr1 = user.username;
      if (incr1 === "Abacus2022" ) 
      {
       console.log('  y ')
      sessionStorage.setItem('authFlag', true );
        navigate("/viewAll")
      } else 
      {
      console.log(' value is n ')
      }
     // console.log('Password value is  '  +incr)
     // console.log('User value is  '  +incr1)
      let path = `Welcome`; 
    }

    const handleChangecred = (e) =>
    { 
      var incr = e.target.value;
      //console.log('Hello number '  +incr);
      //console.log ('Handling changed user' );
      setUser({...user, [e.target.name]: e.target.value });
    
    }

  
    return (
      <div className="App">
      <header className="App-header">
      <p>
           Login to enter ReactJS.
      </p>
        <form>
                 <label for="fname">Enter login credentials </label>
                 <div> <br />   </div>
                 <input  placeholder = "UserName" name="username"   onChange={ handleChangecred } />
                 <div> <br />   </div>
                 <input  placeholder = "Password" name="password"   onChange={ handleChangecred } />
                 <div> <br />   </div>
                 <button  className="button1"  onClick={routeChange} type= "button"> Login </button> 
                 <div> <br />   </div>
                 <button  className="button2"   type= "button" > Click Me </button>
                
        </form>
        </header>

    </div>
    );
   
}
export default Login;
