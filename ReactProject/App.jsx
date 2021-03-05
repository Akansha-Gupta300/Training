import React from 'react';

class App extends React.Component {
   render() {

    // Refer the css
       let myStyle = {
           fontSize: 50,
           color: 'red'
       }

       // define some data
       let companies = ['Coforge', 'Sopra', 'IBM', 'Nagarro'];

      return (
         <div>
            <h1>React Application</h1>
            <h1 style={myStyle}>App User-&gt;{this.props.username}</h1>
            <h2>Another User--&gt; {this.props.sessionUser}</h2>
            <ul>
                {companies.map(function(company, index){
                    return <li key= {index}>{company}</li>
                })}
            </ul>
         </div>
      );
   }
}

export default App;
