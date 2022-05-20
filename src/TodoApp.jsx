import React , {Component} from 'react'
import './Counter.css'
import SubCounter from './SubCounter';
import Login from './Login';
import Welcome from './Welcome';
import DataDisplay from './dataDisplay';
import { BrowserRouter as Router , Route,Routes,  useNavigate , Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
class TodoApp extends Component 
{

  constructor (props)
  { 
    super(props);
    this.state = 
    {
      auth : false
    }
    //this.cIncrement = this.cIncrement.bind(this);

  }
   //const history = useHistory;
  render ()
  {
    return(
    <Router>
    <div>
      <header>
        <Nav>
    <Bars />
    <NavMenu>
    <NavLink to='/' >
      Home
    </NavLink>
    <NavLink to='/Welcome' >
      Contact
    </NavLink>
    <NavLink to='/Login'  >
      Login
    </NavLink>
    <NavLink to='/About' >
      About
    </NavLink>
    </NavMenu>
    </Nav>
    </header>
        <main>
         <Routes>
          <Route path= '/'  element = {<Login/>} />
          <Route path= '/Welcome'  element = {<Welcome />} />
          <Route path= '/Contact'  element = {<Login/>} />
          <Route path= '/Login' element = {<Login  />}   />
          <Route path= '/viewAll'  element = {<DataDisplay  />}   />
         </Routes>
        </main> 
    </div>
    </Router> 
  );
  }
  pushtoWelcome = () => 
  {
     console.log('Hello Sir from pushtoWelcome component');
     //console.log('Trying to increase ' + this.state.counter + ' by a value of ' +val );
     //this.state.counter ++ ;
     
  }  
   RequireAuth = () => 
  {
    //var auth = sessionStorage.getItem('authFlag');;
    console.log('Validating authentication'  );
   // return auth === true ? children : <Navigate to="/Login" replace />;

  }
  
}

export default TodoApp;