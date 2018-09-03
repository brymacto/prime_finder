const range = require('lodash/range');
const filter = require('lodash/filter');
const isEqual = require('lodash/isEqual');
const partial = require('lodash/partial');
const sortBy = require('lodash/sortBy');

function calculateMedianPrimeNumbers(upperLimit) {
  return originalCalculateMedianPrimeNumbers(upperLimit);
}

function originalCalculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const primeNumbers = filter(primeNumberCandidates, isPrime);

  return median(primeNumbers);
}

function isPrime(primeCandidate) {
  const divisibleCandidates = range(1, primeCandidate + 1);

  const divisibleNumbers = filter(divisibleCandidates, partial(isDivisible, primeCandidate));

  return isEqual(divisibleNumbers, [1, primeCandidate]);
}

function isDivisible(number, divisibleCandidate) {
  return (number % divisibleCandidate) === 0;
}

function median(numbers) {
  const sorted = sortBy(numbers, n => n);

  const isEven = isDivisible(sorted.length, 2);

  if (isEven) {
    return sorted.slice((sorted.length / 2 - 1), (sorted.length / 2 + 1));
  }

  return [sorted[Math.floor(sorted.length / 2)]];
}

module.exports = calculateMedianPrimeNumbers;
