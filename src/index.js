import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
