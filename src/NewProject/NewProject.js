import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toaster from 'toasted-notes';
import './NewProject.css';

class NewProject extends Component {
  state = {
    templates: []
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(`http://www.mocky.io/v2/5d3d0d60320000643eafd053`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          templates: response.templates,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({isLoading: false});
        console.log(error);
      });
  }

  handleSave = () => {
    toaster.notify('Project saved.', {
      duration: 2000
    });
    this.props.history.push('/');
  }

  render() {
    const { templates } = this.state;
    return (
      <React.Fragment>
        <h1 className="mb-4">New Project</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="template">Template</label>
            <select id="template" className="form-control" >
              <option>Optionally select a template...</option>
              {templates.map(template =>
              <option key={template.id} value={template.id}>
                {template.name}
              </option>)}
            </select>
            <small className="form-text text-muted">When you create a new project you can choose a template to import the defaults tasks.</small>
          </div>
          <button type="button" className="btn btn-primary mr-1" onClick={this.handleSave}>Save</button>
          <Link className="btn btn-secondary" to="/" role="button">Cancel</Link>
        </form>
      </React.Fragment>
    );
  }
}

export default NewProject;
