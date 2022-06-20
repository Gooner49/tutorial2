import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css';
import './Counter.css'
import SubCounter from './SubCounter';
import addItem from './addItem';
import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter as Router , Route,Routes,  useNavigate , Link } from 'react-router-dom';
import {
  Nav,
  Nav1,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const DataDisplay = () => 
{
    
    const baseURL = "http://localhost:8080/viewmodel";
    const [post, setPost] = useState({listv : [] });
    console.log('Hello from Data display');
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
     
        let c = response.data;
        let v = [];
        c.forEach(element =>
           {
             console.log ("now traversing with array ID " +element.title);
             v.push (element)
             console.log (v);
           });  
           console.log (v);      

         setPost({...post , listv : [...v] });
        // setUser({...user, [e.target.name]: e.target.value });
        console.log( "Now logging state values");
        console.log( post);

        console.log( "Finished logging state values");
        //console.log( post.title);
      });
    }, []);
  
    if (!post) return null;
//    post.listv.map (b =>  console.log(" dd " +b.title));
    return (
        <div>
         <h1>Hello rendering from data display</h1>
         <p>finished rendering from data display</p>
          <div>
                 <div> <br />   </div>
                 <Link to="addItem">AddItem</Link>
                 <div> <br />   </div>
                 <Link to="viewItem">ViewItem</Link>
          </div>
        </div>
 
    );
   // console.log('Hello from Data display');
    
  }
  
export default DataDisplay;