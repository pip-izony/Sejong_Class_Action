import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';
import Header from "./pages/Header";
import Body from "./pages/Body";
import Footer from "./pages/Footer";

ReactDOM.render(<Root />, document.getElementById('root'));
ReactDOM.render(
    <HashRouter>
      <Header/>
      <Body/>
      <Footer/>
    </HashRouter>,
    document.querySelector("#container")
  )