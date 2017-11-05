import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';

export default class Statefull extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Statefull" />
    );
  }
}

Statefull.propTypes = {
  props: PropTypes.object.isRequired,
};
