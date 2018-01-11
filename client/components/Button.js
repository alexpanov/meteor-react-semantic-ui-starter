import React from 'react';
import PropTypes from 'prop-types';
import {Button as SuiButton} from 'semantic-ui-react';

// @todo #3:30min Expand the Button component
export default class Button extends React.Component {
  render() {
    const {text, ...rest} = this.props;
    return (
      <SuiButton {...rest}>
        {text}
      </SuiButton>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
