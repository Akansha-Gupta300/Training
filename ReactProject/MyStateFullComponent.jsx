// Develop the statefull component here 
import React from 'react';
import {Button} from 'react-bootstrap';

class MyStateComponent extends React.Component {

   constructor(props){
   
    super(props);

     this.state= {

     	data:[]  // array what we will put inside this Array will maintainn this as state
     }

      this.updateState = this.updateState.bind(this);

   };
// write React even here 

updateState(){

// implementation here 
console.log('update the state implemenation');

      var item = "setTime..." + Date.now();  // take dynamic value form object
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray}) 

}

render() {
    return(
        <div>

      <Button variant="warning" onClick ={this.updateState}>Updated state</Button>
        <h1>{this.state.data}</h1>
         
        </div>
     );
  }
}
export default MyStateComponent;




