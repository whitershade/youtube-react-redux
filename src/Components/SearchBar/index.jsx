import React, { Component } from 'react';
import PropTypes            from 'prop-types';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      searchText: '',
    };
  }

  onInputChange({ target: { value: searchText } }) {
    this.setState({ searchText });

    this.props.changeSearchText(searchText);
  }

  render() {
    return (
      <input
        value={ this.state.searchText }
        onChange={ this.onInputChange }
      />
    );
  }
}

SearchBar.propTypes = {
  changeSearchText: PropTypes.func.isRequired,
};
