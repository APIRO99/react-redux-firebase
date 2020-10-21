import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Project from 'pages/Project'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={Project} />
        <Route exact path="/signin" component={Project} />
        <Route exact path="/signip" component={Project} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;