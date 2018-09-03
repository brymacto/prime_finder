const range = require('lodash/range');
const filter = require('lodash/filter');
const isEqual = require('lodash/isEqual');

function calculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const primeNumbers = filter(primeNumberCandidates, isPrime);

  return primeNumbers;

  function isPrime(primeCandidate) {
    const divisibleCandidates = range(1, primeCandidate + 1);

    const divisibles = filter(divisibleCandidates, (divisibleCandidate) => {
      return (primeCandidate % divisibleCandidate) === 0;
    });

    return isEqual(divisibles, [1, primeCandidate]);
  }
}

module.exports = calculateMedianPrimeNumbers;
