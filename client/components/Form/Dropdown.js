import React from 'react';
import PropTypes from 'prop-types';
import {Field as ReduxFormField} from 'redux-form';
import {Form} from 'semantic-ui-react';
import getPlaceholder from './reusableFunctions/getPlaceholder';

class SemanticUiDropdown extends React.Component {
  onChange(e, {value}) {
    const {input} = this.props;
    input.onChange(value);
  }

  render() {
    const {label, options} = this.props;

    return (
      <Form.Select
        label={label}
        options={options}
        onChange={(e, d) => this.onChange(e, d)}
        placeholder={getPlaceholder(this.props)}
      />
    );
  }
}

SemanticUiDropdown.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default class Dropdown extends React.Component {
  render() {
    const {
      options, name, label, ...rest
    } = this.props;
    return (
      <ReduxFormField
        name={name}
        component={SemanticUiDropdown}
        options={options}
        label={label}
        {...rest}
      />
    );
  }
}

// @todo #1:30min Enable required verification
Dropdown.defaultProps = {
  optional: false
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
};
