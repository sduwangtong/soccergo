import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


let SiginForm = props => {
  const {handleSubmit, loginError} = props;
  let errorBlock;
  if (loginError) {
    errorBlock =
    <div className="alert alert-danger">
      <strong> Opps! </strong> {loginError}
    </div>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="text"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="text" />
        </fieldset>
        <button className="btn btn-primary" action="submit"> Sign in </button>
        {errorBlock}
      </form>
  );
}

SiginForm = reduxForm({form: 'signin'})(SiginForm);

export default SiginForm;
