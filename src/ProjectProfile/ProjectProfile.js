import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectProfile.css';

class ProjectProfile extends Component {
  state = {
    id: null,
    name: null,
    tasks: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(`http://www.mocky.io/v2/5d3d1e6e320000e745afd05d`)
      .then(response => {
        return response.json();
      })
      .then(project => {
        this.setState({
          ...project,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({isLoading: false});
        console.log(error);
      });
  }

  render() {
    const { id, name, tasks, isLoading } = this.state;
    return (
      <React.Fragment>
      {!isLoading ?
      <React.Fragment>
        <h1 className="mb-4">Project: {name}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{width: '5%'}}>#</th>
              <th scope="col">Task</th>
              <th scope="col" className="text-center" style={{width: '15%'}}>Completed</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(task =>
          <tr key={task.id}>
            <th scope="row">{task.id}</th>
            <td>{task.name}</td>
            <td className="text-center">{task.completed ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</td>
          </tr>)}
          </tbody>
        </table>
        <Link className="btn btn-primary" to={`/new-task/${id}`} role="button">New Task</Link>
      </React.Fragment> :
      <div className="alert alert-primary" role="alert">
        <i className="fas fa-spinner fa-lg fa-spin"></i> Loading!
      </div>}
      </React.Fragment>
    );
  }
}

export default ProjectProfile;
