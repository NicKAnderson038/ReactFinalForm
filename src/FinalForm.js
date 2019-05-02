import React from "react";
import Input from "./Input";
import { Form, Field } from "react-final-form";

const FinalForm = () => (
  <Form
    render={() => (
      <div>
        <h2>Final Form</h2>
        <form>
          <Input
            type="text"
            label="Customer ID"
            id="customer-id"
            name="customer-id"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )}
  />
);

export default FinalForm;

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);
