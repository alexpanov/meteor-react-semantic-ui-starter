import React from 'react';
import PropTypes from 'prop-types';
import VinNumberCard from './VinNumberCard';
import List from '/client/components/List';

export default class VinNumbers extends React.Component {
  render() {
    const {vinNumbers} = this.props;
    return (
      <List elements={vinNumbers}>
        {vin => <VinNumberCard vin={vin} />}
      </List>
    );
  }
}

VinNumbers.propTypes = {
  vinNumbers: PropTypes.array.isRequired,
};
