import React from 'react';
import {reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import Form, {Input} from '../../components/Form';
import Button from '../../components/Button';
import {createFormSchemaValidator} from '/client/validation/form';
import {VinNumberFields} from '/imports/api/vinNumbers/collection';
import {addVin} from '/imports/api/vinNumbers/methods';
import validateVin from './validateVin';

class AddVinForm extends React.Component {
  onCreate(vin) {
    const {reset} = this.props;

    return addVin.callPromise(vin)
      .then(() => console.log('success'))
      .then(reset)
      .catch((err) => {
        // @todo #3:30min Display the error
        console.error('Error', err);
      });
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onCreate.bind(this))} id="add-vin-form">
        <Input name="value" label="VIN number" validate={validateVin} />
        <Input name="notes" label="Notes" />
        <Button text="Save" type="submit" loading={submitting} />
      </Form>
    );
  }
}

AddVinForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'addVin',
  validate: createFormSchemaValidator(VinNumberFields)
})(AddVinForm);
