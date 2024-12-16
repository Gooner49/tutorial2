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
    const dataURL = "https://jsonplaceholder.typicode.com/todos/5";
    const [post, setPost] = useState({listv : [] });
    const [datum, setData] = useState('');
    console.log('Hello from Data display');
    React.useEffect(() => {
     {/* axios.get(baseURL).then((response) => {
     
        let c = response.data;
        setPost({listv : c });
        // setUser({...user, [e.target.name]: e.target.value });
        console.log( "Now logging state values");
        console.log( post);

        console.log( "Finished logging state values");
        //console.log( post.title);
      });   */}

      axios.get(dataURL).then((response) =>
      {
        let d = response.data.title;
        setData(d);
        // setUser({...user, [e.target.name]: e.target.value });
        console.log( "Now logging data values");
        console.log( response.data);
        console.log( d);
        console.log( "Finished logging data values");
      }
    
    
    );
    }, []);
   // console.log( "Finished logging data values1");
   // console.log( this.datum);
  
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
          <div>
            <h2>data displayed <br/> {datum} </h2>     
          </div> 
        </div>
    );
   // console.log('Hello from Data display');
}
export default DataDisplay;