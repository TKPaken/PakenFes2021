import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

/*
import Paper from './pages/Paper';
import Game from './pages/Game';
import GameDetails from './pages/GameDetails';
import Lecture from './pages/Lecture';
import CG from './pages/CG';
 */

import NotFound from "./pages/NotFound";

function App(): JSX.Element {
    const [isLoaded, setIsLoaded] = useState(false);
    const onLoad = ((): void => {
        setIsLoaded(true);
    });
    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoaded(true);
        } else {
            window.addEventListener("load", onLoad);
            return (): void => {
                window.removeEventListener("load", onLoad);
            };
        }
    }, []);
    return (
        <div className="App">
            <div className={"loading" + (isLoaded ? " inactive" : " active")}>
                <div className="sk-chase">
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                    <div className="sk-chase-dot"/>
                </div>
            </div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
