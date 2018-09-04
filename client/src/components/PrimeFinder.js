import React, { Component } from 'react';

class PrimeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { upperLimit: '', results: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ upperLimit: event.target.value });
  }

  handleSubmit(event) {
    const { upperLimit } = this.state;

    fetch(`/prime_numbers?upper_limit=${upperLimit}`)
      .then(res => res.json())
      .then(results => this.setState({ results: results.median }));


    event.preventDefault();
  }


  render() {
    const {
      results,
      upperLimit,
    } = this.state;

    return (
      <div className="prime-finder-container">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ upperLimit } onChange={ this.handleChange } />
          <input type="submit" />
        </form>

        { results.length > 0 &&
        <p>Your results are: {results.toString()}. Try another number! </p>
        }


      </div>
    );
  }
}

export default PrimeFinder;
