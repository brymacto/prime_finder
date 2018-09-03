const range = require('lodash/range');
const filter = require('lodash/filter');
const isEqual = require('lodash/isEqual');
const partial = require('lodash/partial');

function calculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const primeNumbers = filter(primeNumberCandidates, isPrime);

  return primeNumbers;

  function isPrime(primeCandidate) {
    const divisibleCandidates = range(1, primeCandidate + 1);

    const divisibleNumbers = filter(divisibleCandidates, partial(isDivisible, primeCandidate));

    return isEqual(divisibleNumbers, [1, primeCandidate]);
  }

  function isDivisible(number, divisibleCandidate) {
    return (number % divisibleCandidate) === 0;
  }
}

module.exports = calculateMedianPrimeNumbers;
