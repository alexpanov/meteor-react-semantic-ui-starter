import React from 'react';
import {Form, Input as SemanticInput, Label} from 'semantic-ui-react';
import {Field as ReduxFormField} from 'redux-form';
import PropTypes from 'prop-types';
import getPlaceholder from './reusableFunctions/getPlaceholder';

class SemanticUiInput extends React.Component {
  onChange(e, {value}) {
    const {input: {onChange}} = this.props;
    onChange(value);
  }

  error() {
    return this.retrieveActionableMetaValue('error');
  }

  retrieveActionableMetaValue(metaKey) {
    const {meta} = this.props;
    const {touched, active} = meta;
    const metaValue = meta[metaKey];
    return touched && !active ? metaValue : null;
  }

  warning() {
    return this.retrieveActionableMetaValue('warning');
  }

  renderWarning() {
    const warning = this.warning();
    if (warning) {
      return <span>{warning}</span>;
    }

    return false;
  }

  renderError() {
    const error = this.error();
    if (error) {
      return <Label basic color="red" pointing>{error}</Label>;
    }

    return false;
  }

  render() {
    const {
      input, label, as: InputField, ...props
    } = this.props;

    return (
      <Form.Field>
        <label htmlFor={input.name}>{label}</label>
        <InputField
          {...input}
          value={input.value}
          {...props}
          onChange={(e, d) => this.onChange(e, d)}
          error={!!this.error()}
        />
        {this.renderWarning()}
        {this.renderError()}
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

    const parse = (value) => (type === 'number' ? parseFloat(value) : value);

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

// @todo #1:30min Add a plain number boolean prop instead of type="number"
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
