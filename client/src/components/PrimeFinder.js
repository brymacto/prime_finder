import React, { Component } from 'react';

class PrimeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { upperLimit: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ upperLimit: event.target.value });
  }

  handleSubmit(event) {
    console.log('Submitted')
    event.preventDefault();
  }


  render() {
    const { upperLimit } = this.state;

    return (
      <div className="prime-finder-container">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ upperLimit } onChange={ this.handleChange } />
          <input type="submit" />
        </form>

      </div>
    );
  }
}

export default PrimeFinder;
