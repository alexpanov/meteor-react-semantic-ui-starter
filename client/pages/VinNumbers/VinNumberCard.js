import React from 'react';
import PropTypes from 'prop-types';

// @todo #15:30min Add more info to the VIN card
export default class VinNumberCard extends React.Component {
  render() {
    const {vin} = this.props;
    return (
      <p>{vin.friendlyCreationDate()}</p>
    );
  }
}

VinNumberCard.propTypes = {
  vin: PropTypes.object.isRequired,
};
