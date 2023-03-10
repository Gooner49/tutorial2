import React , {Component, useState} from 'react';
import './Counter.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Basicdropd = () =>
{
  const [user, setUser] = useState({country: 'kras' });
  let fruits = [
        {label: "France" , value : "FR"},
        {label: "Portugal" , value : "PT"},
        {label: "Ireland" , value : "IE"},
        {label : "Italy" , value : "IT"},
        {label : "Spain" , value : "ES"}
      ];

  const handleChange = (e) =>
  { 
    //var incr = e.target.value;
    console.log('Hello number ' +e.target.value );
    //console.log ('Handling changed user' );
    setUser({...user, [e.target.name]: e.target.value });
    console.log('Changed number ' +e.target.value );
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
           <select  onChange = {handleChange}>
                {
                  fruits.map  ((country) => (<option value = {country.value}>{country.label}</option> )) 
                }            
            </select>  
          </div>   
     </div>
  );
}
export default Basicdropd;
