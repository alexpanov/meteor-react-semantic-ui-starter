import React from 'react';
import PropTypes from 'prop-types';

export default class Hover extends React.Component {
  state = {
    hovered: false
  };

  render() {
    const {hovered} = this.state;
    const {children} = this.props;
    return (
      <span
        onMouseOver={() => this.setState({hovered: true})}
        onFocus={() => this.setState({hovered: true})}
        onMouseOut={() => this.setState({hovered: false})}
        onBlur={() => this.setState({hovered: false})}
      >
        {children(hovered)}
      </span>
    );
  }
}

Hover.propTypes = {
  children: PropTypes.func.isRequired,
};
