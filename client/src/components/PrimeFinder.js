import React, { Component } from 'react';

class PrimeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { upperLimit: '', results: [], lastSubmittedUpperLimit: null };
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
      .then(results => this.setState({ results: results.median, lastSubmittedUpperLimit: upperLimit }));


    event.preventDefault();
  }


  render() {
    const {
      results,
      upperLimit,
      lastSubmittedUpperLimit,
    } = this.state;

    let resultMessage = "";

    if (results.length > 0) {
      resultMessage = `Your results are: ${results.toString()}. Thanks for checking!`;
    } else if (lastSubmittedUpperLimit === upperLimit) {
      resultMessage = `No prime numbers were found for ${upperLimit}. Try another number!`;
    } else {
      resultMessage = "Submit a number to get the answer you're looking for!";
    }

    return (
      <div className="prime-finder-container">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ upperLimit } onChange={ this.handleChange } />
          <input type="submit" />
        </form>

        <p>{ resultMessage } </p>


      </div>
    );
  }
}

export default PrimeFinder;
