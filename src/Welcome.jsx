import React , {Component} from 'react'
import './Counter.css'
import SubCounter from './SubCounter';
class Welcome extends Component {
  constructor (props)
  { 
    super(props);
    this.state = 
    {
      counter : 7

    }
    //this.cIncrement = this.cIncrement.bind(this);

  }

  render  () 
  {
    const originalArr = [
                            {vendor: 2001, bananas: 50, apples:75, oranges: 12},
                            {vendor: 2002, bananas: 25, apples:60, oranges: 82},
                            {vendor: 2003, bananas: 36, apples:41, oranges: 73},
                            {vendor: 2004, bananas: 59, apples:62, oranges: 87}
                        ];

    console.log('Hello from counter render');
    return (
      <div>
        <h1 class = "header">
            Welcome to To Do List 
        </h1>   
          <div>
            <table>
              <thead>
                <tr>
                  <th>vendor</th>
                  <th>bananas</th>
                  <th>Country</th>
                  <th>oranges</th>
                </tr>
              </thead>
              <tbody> 
                {
                  originalArr.map
                  (
                              a =>  
                              <tr>
                                <td>{a.vendor}</td>
                                <td>{a.bananas}</td>
                                <td>{a.apples}</td>
                                <td>{a.oranges}</td>
                              </tr>
                  )
                }  
             </tbody>  
            </table>
          </div>
      </div>    
      );
  }
  

}

export default Welcome;