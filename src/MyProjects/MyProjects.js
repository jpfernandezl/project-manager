import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyProjects.css';

class MyProjects extends Component {
  state = {
    projects: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(`http://www.mocky.io/v2/5d3cfae7320000b738afd04d`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          projects: response.projects,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({isLoading: false});
        console.log(error);
      });
  }

  render() {
    const { projects, isLoading } = this.state;
    return (
      <div>
      {!isLoading ?
      <React.Fragment>
        <h1 className="mb-4">My Projects</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{width: '5%'}}>#</th>
              <th scope="col">Project</th>
              <th scope="col" style={{width: '15%'}}></th>
            </tr>
          </thead>
          <tbody>
          {projects.map(project =>
          <tr key={project.id}>
            <th scope="row">{project.id}</th>
            <td>{project.name}</td>
            <td><Link className="btn btn-primary" to={`/project/${project.id}/`} role="button">View Project</Link></td>
          </tr>)}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/new-project" role="button">New Project</Link>
      </React.Fragment> :
      <div className="alert alert-primary" role="alert">
        <i className="fas fa-spinner fa-lg fa-spin"></i> Loading!
      </div>}
      </div>
    );
  }
}

export default MyProjects;
