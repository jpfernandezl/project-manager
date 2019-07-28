import React, { Component } from 'react';
import toaster from 'toasted-notes';
import './NewTask.css';

class NewTask extends Component {

  handleSave = () => {
    toaster.notify('Task saved.', {
      duration: 2000
    });
    this.props.history.goBack();
  }

  handleCancel = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mb-4">New Task</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" />
          </div>
          <div className="form-group form-check">
            <input id="completed" type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="completed">Completed</label>
          </div>
          <button type="button" className="btn btn-primary mr-1" onClick={this.handleSave}>Save</button>
          <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewTask;
