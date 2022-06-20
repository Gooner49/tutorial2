import React , {Component, useState} from 'react';
import axios from "axios";
import './Counter.css';
import SubCounter from './SubCounter';
const AddItem = () => 
{
    const [book, setBook] = useState({title: '', description: '' , location: ''});
    const baseURL = "http://localhost:8080/addCust";
   
   // let navigate = useNavigate(); 
      const routeChange = () =>
      { 
        console.log(' Description : ' +book.description+  ' ,Title :' +book.title+  '  ,Location : '  +book.location);
        axios.post(baseURL,{
            description: book.description,
            title:  book.title,
            location: book.location,
            
           }).then((response) => 
           {
                  console.log( response);
                  console.log( "Finished logging state values");
           });
        
      }
      const handleChangecred = (e) =>
      { 
        var incr = "rte";
       
        setBook({...book, [e.target.name]: e.target.value });
      
      }

return (
    <div className="App">
    <header className="App-header">
    <p>
         Add Item to Mongo Library.
    </p>
      <form>
               <label for="fname">Enter new book details </label>
               <div> <br />   </div>
               <input  placeholder = "Title" name="title"   onChange={ handleChangecred } />
               <div> <br />   </div>
               <input  placeholder = "Description" name="description"   onChange={ handleChangecred } />
               <div> <br />   </div>
               <input  placeholder = "Location" name="location"   onChange={ handleChangecred } />
               <div> <br />   </div>
               <button  className="button1"  onClick={routeChange} type= "button"> Login </button> 
               <div> <br />   </div>
               <button  className="button2"   type= "button" > Click Me </button>
              
      </form>
      </header>

  </div>
  );
   // console.log('Hello from Data display');
    
}
  
export default AddItem;