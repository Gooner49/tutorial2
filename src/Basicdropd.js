import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Basicdropd = () =>
{
  const [user, setUser] = useState({country: 'kras' });
  const [post, setPost] = useState({listv : [] });
  let fruits = [
        {label: "France" , value : "FR"},
        {label: "Portugal" , value : "PT"},
        {label: "Ireland" , value : "IE"},
        {label : "Italy" , value : "IT"},
        {label : "Spain" , value : "ES"}
      ];
      const baseURL = "http://localhost:8080/viewDept";
      //const [post, setPost] = useState({listv : [] });
      console.log('Hello from Data display');
      React.useEffect(() => {
        axios.get(baseURL).then((response) => 
        {
       
          let c = response.data;
          let v = [];
          c.forEach(element =>
             {
               console.log ("now traversing with array ID " +element.description);
               v.push (element)
               console.log (v);
             });  
             console.log (v);      
    
          setPost({...post , listv : [...v] });
          // setUser({...user, [e.target.name]: e.target.value });
          console.log( "Now logging state values");
          console.log( post.listv);
    
          console.log( "Finished logging state values");
          //console.log( post.title);
        });
      }, []);

  const handleChange = (e,f) =>
  { 
    //var incr = e.target.value;
    console.log('Hello Inumber ' +e.target.value );
    //console.log ('Handling changed user' );
    setUser({...user, [e.target.name]: e.target.value });
    console.log('Changed number ' +e.target.value );
  }

  const hange = (e) =>
  { 
    //var incr = e.target.value;
    console.log('Hello Inumber '  );
    const [user, setUser] = useState({country: 'kras' });
    //console.log ('Handling changed user' );
    //setUser({...user, [e.target.name]: e.target.value });
    //console.log('Changed number ' +e.target.value );
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
                <select  onChange = {handleChange}>
                    {
                       post.listv.map  ((country) => (<option value = {country}>{country}</option> )) 
                    }            
                </select>  

               </div>
               <div>
                    <select onChange = {handlesublistChange}>
                      {

                      }
                    </select>
               </div>
           
          </div>   
     </div>
  );
}
export default Basicdropd;
