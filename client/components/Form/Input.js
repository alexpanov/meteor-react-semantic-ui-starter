import React from 'react';
import {Form, Input as SemanticInput} from 'semantic-ui-react';
import {Field as ReduxFormField} from 'redux-form';
import PropTypes from 'prop-types';
import getPlaceholder from './reusableFunctions/getPlaceholder';

class SemanticUiInput extends React.Component {
  onChange(e, {value}) {
    const {input: {onChange}} = this.props;
    onChange(value);
  }

  renderWarning() {
    const {meta: {touched, warning}} = this.props;

    if (touched && warning) {
      return <span>{warning}</span>;
    }

    return false;
  }

  render() {
    const {
      input, meta: {touched, error}, label, as: InputField, ...props
    } = this.props;

    return (
      <Form.Field>
        <label>{label}</label>
        <InputField
          {...input}
          value={input.value}
          {...props}
          onChange={(e, d) => this.onChange(e, d)}
          error={touched && error}
        />
        {this.renderWarning()}
      </Form.Field>
    );
  }
}

SemanticUiInput.defaultProps = {
  as: SemanticInput
};

SemanticUiInput.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default class Input extends React.Component {
  render() {
    const {name, type, ...rest} = this.props;

    const parse = value => (type === 'number' ? parseFloat(value) : value);

    return (
      <ReduxFormField
        component={SemanticUiInput}
        name={name}
        type={type}
        {...rest}
        placeholder={getPlaceholder(this.props)}
        parse={parse}
      />
    );
  }
}

Input.defaultProps = {
  placeholder: null,
  type: 'text',
};

// TODO Add a plain number boolean prop instead of type="number"
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
