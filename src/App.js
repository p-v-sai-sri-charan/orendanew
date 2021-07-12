import React from 'react'
import { BrowserRouter as Router,Route, Link ,Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <div>
      <Router>
        <main>
          <Navbar />
        </main>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" exact component={Projects} />
        </Switch>
      </Router>

    </div>
  )
}

export default App
