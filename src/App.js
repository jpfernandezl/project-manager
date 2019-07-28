import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header/Header';
import MyProjects from './MyProjects/MyProjects';
import NewProject from './NewProject/NewProject';
import NewTask from './NewTask/NewTask';
import ProjectProfile from './ProjectProfile/ProjectProfile';
import 'toasted-notes/src/styles.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={MyProjects} />
          <Route path="/new-project" component={NewProject} />
          <Route path="/new-task/:projectId" component={NewTask} />
          <Route path="/project/:projectId" component={ProjectProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
