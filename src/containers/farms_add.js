import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addFarm } from '../actions';
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

class FarmsAdd extends Component {
    renderTextField = ({ 
        input, 
        label,
        meta: {touched, error},
        ...custom
    }) => {
        return (
          <div>
            <TextField
                hintText={label}
                floatingLabelText={label}
                errorText={touched && error}
                {...input}
                {...custom}
            />
          </div>
        )
      }

    renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
        labelPosition='left'
    />
    )

    onSubmit = (values) => {
        console.log(values);
        this.props.addFarm(values, () => {
            this.props.history.push('/');
        });
        }

    render() {
        const { handleSubmit } = this.props;
    
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Tilan nimi"
                    name="name"
                    component={this.renderTextField}
                />
                <Field
                    label="Katuosoite"
                    name="address"
                    component={this.renderTextField}
                />
                <Field
                    label="Postinumero"
                    name="zip"
                    component={this.renderTextField}
                />
                <Field
                    label="Kunta"
                    name="city"
                    component={this.renderTextField}
                />
                <h3>Tilalla on tällä hetkellä myynnissä seuraavia tuotteita:</h3>
                <Field
                    label="mansikoita"
                    name="products.strawberry"
                    component={this.renderCheckbox}
                />
                <Field
                    label="mustikoita"
                    name="products.blueberry"
                    component={this.renderCheckbox}
                />
                <div className="form-action-buttons">
                    <RaisedButton type="submit" primary={true} className="submit-button">Submit</RaisedButton>
                    <RaisedButton secondary={true}><Link to="/" className="link">Cancel</Link></RaisedButton>
                </div>
            </form>
        )
    };
}

function validate(values) {
    const errors = {};
  
    if(!values.name) {
      errors.name = 'Kirjoita tilan nimi';
    }
    if(!values.address) {
        errors.address = 'Kirjoita katuosoite';
      }
      if(!values.zip) {
        errors.zip = 'Kirjoita postinumero';
      }
      if(!values.city) {
        errors.city = 'Kirjoita kunta, jossa tila sijaitsee';
      }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'FarmsAddForm',
    initialValues: {products:
                    {strawberry: false, blueberry: false}
                    }
})(connect(null, { addFarm })(FarmsAdd)
  );