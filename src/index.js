import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import sw from "./public/js/sw";

import "./public/css/style.css";
import "./public/css/mq.css";
import "./public/js/button";

ReactDOM.render(<App />, document.getElementById("root"));
sw();
