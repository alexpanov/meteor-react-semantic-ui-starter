import React from 'react';
import PropTypes from 'prop-types';
import {Form as SemanticUiForm} from 'semantic-ui-react';

export {default as Input} from './Input';
export {default as Dropdown} from './Dropdown';

export default class Form extends React.Component {
  render() {
    const {onSubmit, children, ...rest} = this.props;
    return (
      <SemanticUiForm onSubmit={onSubmit} {...rest}>
        {children}
      </SemanticUiForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
