import React from 'react';
import {reduxForm} from 'redux-form';
import Form, {Input} from '../../components/Form';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {createFormSchemaValidator} from '/client/validation/form';
import {VinNumberFields} from '/imports/api/vinNumbers/collection';
import {addVin} from '/imports/api/vinNumbers/methods';

// @todo #3:15min Add VIN validation function tests

// eslint-disable-next-line no-unused-vars
function validateVin(vin) {
  const re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
  return vin.match(re);
}

// @todo #3:10min Add VIN number validation
//  with the above validation function
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
      <Form onSubmit={handleSubmit(this.onCreate.bind(this))}>
        <Input name="value" label="VIN number" />
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
