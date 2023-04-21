import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css'
const Basicdropd = () =>
{
  const [user, setUser] = useState({country :'kras' , category : 'posdf' });
  const [post, setPost] = useState({listv : [] , listv1 :[]});
    
  const baseURL = "http://localhost:8080/viewDept";
      const URLdata1 = {
        URL : baseURL,
        data : "option",
      };

      
      const originalArr = [ 2001,50,75, 12 ];
      React.useEffect(() => {
        axios.get(baseURL).then((response) => 
        {
       
          let c = response.data;
          let v = [];
          c.forEach(element =>
             {
              // console.log ("now traversing with array ID " +element.description);
               v.push (element)
              // console.log (v);
             });  
             console.log (v);      
             setPost({...post , listv : [...v] });
        });
      }, []);

      const handleChange = (e) =>
      { 
        //var incr = e.target.value;
        const URL_getlist = "http://localhost:8080/getTitlelist";
        console.log('Hello Inumber value ' +e.target.value );
        console.log('Hello Inumber name ' +e.target.name );
        //console.log ('Handling changed user' );
        setUser({...user, [e.target.name]: e.target.value });
        console.log('Changed number ' +e.target.value );
        console.log('Changed number1 ' +user.country );
      }


  const handleChange1 = (e) =>
  { 
    const URL_getlist = "http://localhost:8080/getTitlelist";
    console.log('Hello Inumber value ' +e.target.value );
    console.log('Hello Inumber name ' +e.target.name );
    //console.log ('Handling changed user' );
    setUser({...user, [e.target.name]: e.target.value });
    console.log('Making api call with value ' +e.target.value );
    const pathID = e.target.value;
    const URL_getlist1 = `http://localhost:8080/getTitlelist/${pathID}`;
   console.log('Changed number1 ' +user.country );
   console.log('hitting  URL ' +URL_getlist1 );
    //React.useEffect(() => {
      axios.get(URL_getlist1  , {
           
            Category : "poseidon",
          
      }).then((response) => 
      {
        let c = response.data;
        let v = [];
        c.forEach(element =>
           {
            // console.log ("now traversing with array ID " +element.description);
             v.push (element)
            // console.log (v);
           });  
           console.log (c);      
  
        setPost({...post , listv1 : v });
      });
      
  }


  const routeChange = () =>
  { 
    console.log(' value of n is '   +user.country)
  }

  
  return (
    <div>
          <div>
            <label>
             What do we eat 
             <br />
             <br />
             <br />
             <br />
           </label>   
               <div>
                <select  name = "country" onChange = {handleChange1}>
                    {
                       post.listv.map  ((country) => (<option value = {country}>{country}</option> )) 
                    }            
                </select> 
                <div> <br />   </div>
                    <button  className="button1"  onClick={routeChange} type= "button"> Login </button>  
                <div> <br />   </div>
               </div>
               <div>
                 <select  name = "category" onChange = {handleChange}>
                      {
                         post.listv1.map  ((country) => (<option value = {country}>{country + user.country}</option> )) 
                      }            
                 </select> 
               </div>
          </div>   
     </div>
  );
}      
export default Basicdropd;
