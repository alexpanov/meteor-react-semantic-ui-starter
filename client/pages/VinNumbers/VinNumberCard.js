import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'semantic-ui-react';
import {removeVin} from '/imports/api/vinNumbers/methods';
import Hover from '/client/components/Hover';

export default class VinNumberCard extends React.Component {
  onRemove() {
    const {vin: {_id}} = this.props;
    removeVin.callPromise({_id})
      .catch((err) => {
        alert('An error occured. Please check the console');
        console.error(err);
      });
  }

  // @todo #16:30min Implement approve VIN method
  render() {
    const {vin} = this.props;
    return (
      <Hover>
        {hovered => (
          <Card raised={hovered}>
            <Card.Content>
              <Card.Header>VIN # {vin.value}</Card.Header>
              <Card.Meta>{vin.friendlyCreationDate()}</Card.Meta>
              <Card.Description>{vin.notes}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group fluid>
                <Button basic positive>Approve</Button>
                <Button basic negative onClick={() => this.onRemove()}>Remove</Button>
              </Button.Group>
            </Card.Content>
          </Card>
        )}
      </Hover>
    );
  }
}

VinNumberCard.propTypes = {
  vin: PropTypes.object.isRequired,
};
