import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import Employee from './MyComponentTwo.jsx';
import MyStateComponent from './MyStateFullComponent.jsx';
import MyForm from './ReactFormComponent.jsx';
import FetchDemo from './ReactFetch.jsx';

//define emp json
let emp={name: 'Ram', city: 'Moradabad'};
ReactDom.render(<App username="Welcome Coforge" sessionUser="Akansha"/>, document.getElementById('app'));
ReactDom.render(<Employee emp={emp}/>, document.getElementById('shareddata'));
ReactDom.render(<MyStateComponent />, document.getElementById('stateData'));
ReactDom.render(<MyForm />, document.getElementById('formData'));
ReactDom.render(<FetchDemo subreddit="users"/>, document.getElementById('fetch'));