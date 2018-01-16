import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addFarm } from '../actions';

class FarmsAdd extends Component {
    renderField = (field) => {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input
              className="form-control"
              type="text"
              {...field.input}
            />
            <div className="text-help">
            {field.meta.touched ? field.meta.error : ''}
            </div>
          </div>
        )
      }

    onSubmit = (values) => {
        this.props.createPost(values, () => {
          this.props.history.push('/');
        });
      }

    render() {
        const { handleSubmit } = this.props;
    
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
                label="Title"
                name="title"
                component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    };
}

function validate(values) {
    const errors = {};
  
    if(!values.title) {
      errors.title = 'Enter a Title';
    }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'FarmsAddForm'
  })(
    connect(null, { addFarm })(FarmsAdd)
  );