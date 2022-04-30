import React , {Component} from 'react'
import './Counter.css'
import SubCounter from './SubCounter';
class Counter extends Component {
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
          <div className="App">
             <SubCounter by={9} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={6} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={5} incrementMethod = {this.cIncrement}></SubCounter>
             <span className="Display">{this.state.counter}</span>
          </div>
          <div>
            <table>
                <tr>
                  <th>vendor</th>
                  <th>bananas</th>
                  <th>Country</th>
                  <th>oranges</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
            </table>
          </div>
      </div>    
      );
  }
  cIncrement = (val) => 
  {
     console.log('Hello Sir from Counter.cIncrement');
     console.log('Trying to increase ' + this.state.counter + ' by a value of ' +val );
     //this.state.counter ++ ;
     this.setState(
     {
       counter : this.state.counter + val
     });
  }
  

}

export default Counter;