import React from "react";
import {HashRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const BoardHome = () => {
  return(
    <div>
      <head>
        <script src="Header.js"></script>
        <script src="Body.js"></script>
        <script src="Footer.js"></script>
      </head>
      <body>
        Hello World!
      </body>
    </div>
  );
}

export default BoardHome