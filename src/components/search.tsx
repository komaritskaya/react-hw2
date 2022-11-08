import React, { BaseSyntheticEvent, PureComponent } from 'react';

interface SearchProps {
  handleSubmit: (arg0: string) => void;
}

interface SearchState {
  value: string;
}

class Search extends PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt: BaseSyntheticEvent) {
    this.setState({ value: evt.target.value });
  }

  handleSubmit() {
    const { value } = this.state;
    const { handleSubmit } = this.props;
    handleSubmit(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="ui input">
        <input
          type="text"
          placeholder="Search movie..."
          style={{ marginRight: '10px' }}
          onChange={this.handleChange}
          value={value}
        />
        <button type="button" onClick={this.handleSubmit} className="ui icon button">
          <i className="search icon" />
        </button>
      </div>
    );
  }
}

export default Search;
