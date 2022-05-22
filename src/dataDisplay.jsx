import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css';
import SubCounter from './SubCounter';
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
            <table>
              <thead>
                <tr>
                  <th>title</th>
                  <th>Description</th>
                  <th>Location</th>
                  
               </tr>
              </thead>
              <tbody> 
                {
                  post.listv.map
                  (
                              a =>  
                              <tr>
                                <td>{a.title}</td>
                                <td>{a.description}</td>
                                <td>{a.location}</td>
                              </tr>
                  )
                }  
             </tbody>  
            </table>
          </div>
      </div>
    );
   // console.log('Hello from Data display');
    
  }
  
export default DataDisplay;