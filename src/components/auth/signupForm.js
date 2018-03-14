import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


let SignupForm = props => {
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
        <button className="btn btn-primary" action="submit"> Sign up </button>
        {errorBlock}
      </form>
  );
}

SignupForm = reduxForm({form: 'signin'})(SignupForm);

export default SignupForm;
