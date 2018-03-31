import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import IndexApp from "./IndexApp";
//On app start, check to see if user is authenticated

//render into the DOM
ReactDOM.render(
  <IndexApp />,
  document.getElementById("root")
);

registerServiceWorker();
