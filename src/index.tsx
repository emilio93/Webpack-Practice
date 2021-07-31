import "./script.ts";
import './style.css';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
import App from "./components/App";

render(
  <App />,
  document.getElementById('app')
);
