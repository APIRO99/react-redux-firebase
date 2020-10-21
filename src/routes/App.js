import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Project from 'pages/Project'
import signin from 'pages/SignIn'
import signUp from 'pages/SignUp'
import newProject from 'pages/NewProject'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={Project} />
        <Route exact path="/signin" component={signin} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/newProject" component={newProject} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;