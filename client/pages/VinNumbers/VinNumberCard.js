import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'semantic-ui-react';

export default class VinNumberCard extends React.Component {
  // @todo #16:30min Implement remove VIN method
  // @todo #16:30min Implement approve VIN method
  render() {
    const {vin} = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>VIN {vin.value}</Card.Header>
          <Card.Meta>{vin.friendlyCreationDate()}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button basic positive>Approve</Button>
            <Button basic negative>Remove</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}

VinNumberCard.propTypes = {
  vin: PropTypes.object.isRequired,
};
