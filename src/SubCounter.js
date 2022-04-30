import React , {Component} from 'react'
import './Counter.css'
class SubCounter extends Component {
  constructor (props)
  { 
    super(props);
    //val : 10
    //this.cIncrement = this.cIncrement.bind(this);
  }

  render = () =>
  {
    console.log('Hello Pirs');
    return (
      <div className="App">
         <button onClick={this.cIncr} className="button1"> +{this.props.by} </button><br/>
      </div>
    );
  }
  cIncr = () =>
  {
     var incr = this.props.by;
     console.log('Hello Sir from SubCounter cIncrement  number '  +incr);
     this.props.incrementMethod(incr);
  }
}  
  export default SubCounter;
