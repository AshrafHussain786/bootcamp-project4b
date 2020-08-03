import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import {NavBar} from './components/NavBar';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

function RouteConfig() {
    return (
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/project" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <br />
                <Footer />
            </Router>
        </div>
    )
}
export default RouteConfig;