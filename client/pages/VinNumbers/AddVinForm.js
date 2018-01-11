import React from 'react';
import {reduxForm} from 'redux-form';
import Form, {Input} from '../../components/Form';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

// @todo #3:15min Add VIN validation function tests

// eslint-disable-next-line no-unused-vars
function validateVin(vin) {
  const re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
  return vin.match(re);
}

// @todo #3:10min Add VIN number validation
//  with the above validation function
class AddVinForm extends React.Component {
  // @todo #3:30min Implement `createVin` method
  onCreate(vin) {
    console.log(vin);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onCreate.bind(this))}>
        <Input name="vin" label="VIN number" />
        <Input name="notes" label="Notes" />
        <Button text="Save" type="submit" />
      </Form>
    );
  }
}

AddVinForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addVin'
})(AddVinForm);
