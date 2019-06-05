import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';


// App
import App from './App';

// Router
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(<Router><App/></Router>,document.getElementById('app'))