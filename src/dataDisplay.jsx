import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css';
import SubCounter from './SubCounter';
const DataDisplay = () => 
{
    
    const baseURL = "http://localhost:8080/viewlist";
    const [post, setPost] = useState([]);
    console.log('Hello from Data display');
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
     
        let c = response.data;
        c.forEach(element => {
             console.log ("now traversing with array ID " +element.cId);
        });       
         //   console.log(  response.data.cId);
        // console.log( "Now logging state values");
        // console.log( post);
        //console.log( post.title);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
    console.log('Hello from Data display');
    
  }
  



export default DataDisplay;