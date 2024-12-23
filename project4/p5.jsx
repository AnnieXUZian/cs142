import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";
import './p5.css';

ReactDOM.render(
    <div>
        <Header />
        <HashRouter>
            <div>
                <Link className='link-button' to='/states'>States</Link>
                <Link className='link-button' to='/example'>Example</Link>
            </div>
            <div>
                <Route  path="/states" component={States} />
                <Route  path="/example" component={Example} />
            </div>
        </HashRouter>
    </div>, 
    document.getElementById("reactapp"));
