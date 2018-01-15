import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Loader from '/client/components/Loader';
import {VinNumbers} from '/imports/api/vinNumbers/collection';
import AddVinForm from './AddVinForm';
import VinNumbersList from './VinNumbersList';

class VinNumbersPage extends React.Component {
  renderVinNumbersList() {
    const {vinNumbers, loading} = this.props;
    if (loading) {
      return <Loader />;
    }

    return <VinNumbersList vinNumbers={vinNumbers} />;
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
