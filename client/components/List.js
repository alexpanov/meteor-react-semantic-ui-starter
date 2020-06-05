import React from 'react';
import PropTypes from 'prop-types';
import {List as SuiList, TransitionGroup} from 'semantic-ui-react';

export default class List extends React.Component {
  render() {
    const {children, elements} = this.props;
    return (
      <TransitionGroup
        as={SuiList}
        duration={200}
        animation="fade left"
      >
        {elements.map((element) => (
          <SuiList.Item key={element._id}>
            {children(element)}
          </SuiList.Item>
        ))}
      </TransitionGroup>
    );
  }
}

List.propTypes = {
  children: PropTypes.func.isRequired,
  elements: PropTypes.array.isRequired,
};
