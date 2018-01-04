import React from 'react';
import PropTypes from 'prop-types';
import {Menu as SemanticUiMenu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  renderLinks() {
    return this.props.links.map(({href, label}) => (
      <SemanticUiMenu.Item key={label}>
        <Link to={href} name={label}>
          {label}
        </Link>
      </SemanticUiMenu.Item>
    ));
  }

  render() {
    return (
      <SemanticUiMenu>
        {this.renderLinks()}
      </SemanticUiMenu>
    );
  }
}

Menu.propTypes = {
  links: PropTypes.array.isRequired,
};
