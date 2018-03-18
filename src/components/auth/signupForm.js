import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email ='required';
  }
  if (!values.password) {
    errors.password ='required';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm ='required';
  }

  if (values.password !== values.passwordConfirm ) {
    errors.passwordConfirm = 'password must be matching';
  }
  return errors
}



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let SignupForm = props => {
  const {handleSubmit, signUpError} = props;
  let errorBlock;
  if (signUpError) {
    errorBlock =
    <div className="alert alert-danger">
      <strong> Opps! </strong> {signUpError}
    </div>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <Field name="email" component={renderField} label="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <Field name="password" component={renderField} label="Password" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="passwordConfirm" component={renderField} label="Password Confirm" />
        </fieldset>
        <div>
          <button className="btn btn-primary" action="submit"> Sign up </button>
          {errorBlock}
        </div>
      </form>
  );
}

SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm);

export default SignupForm;
