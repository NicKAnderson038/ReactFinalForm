import React from "react";
import Input from "./Input";
import { Form, Field } from "react-final-form";

const renderInput = ({ input, meta }) => (
  <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const FinalForm = () => (
  <Form
    onSubmit={onSubmit}
    render={() => (
      <div>
        <h2>Final Form</h2>
        <form>
          <Field name="customer-id" component={renderInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )}
  />
);

export default FinalForm;

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);
