import React from 'react';

class MyForm extends React.Component {
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = {};
    for (const field in this.refs) {
      console.log(field);
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
   // method to REST post Data to invoke and send to server
 // Jquery code at
 // Express integrion


  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input ref="phone" className="phone" type='tel' name="phone"/>
            <input ref="email" className="email" type='email' name="email"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    );
  }
}

export default MyForm;



