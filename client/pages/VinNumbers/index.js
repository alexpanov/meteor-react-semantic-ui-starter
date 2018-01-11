import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Loader from '/client/components/Loader';
import {VinNumbers} from '/imports/api/vinNumbers/collection';

// eslint-disable-next-line no-unused-vars
function validateVin(vin) {
  const re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
  return vin.match(re);
}


// @todo implement with the form components
class AddVinForm extends React.Component {
  render() {
    return (
      <div>AddVinForm</div>
    );
  }
}

class VinNumbersPage extends React.Component {
  renderVinNumbersList() {
    const {vinNumbers, loading} = this.props;
    if (loading) {
      return <Loader />;
    }

    return vinNumbers.map(vin => (
      <p key={vin._id}>{vin.friendlyCreationDate()}</p>
    ));
  }

  render() {
    return (
      <div>
        <AddVinForm />
        {this.renderVinNumbersList()}
      </div>
    );
  }
}

VinNumbersPage.propTypes = {
  vinNumbers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withTracker(() => ({
  loading: !Meteor.subscribe('VinNumbers/publications/all').ready,
  vinNumbers: VinNumbers.find().fetch()
}))(VinNumbersPage);
