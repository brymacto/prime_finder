const range = require('lodash/range');
const filter = require('lodash/filter');
const map = require('lodash/map');
const isEqual = require('lodash/isEqual');
const partial = require('lodash/partial');
const sortBy = require('lodash/sortBy');
const reduce = require('lodash/reduce');
const pullAll = require('lodash/pullAll');
const isUndefined = require('lodash/isUndefined');

function calculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const primeNumbers = reduce(
    primeNumberCandidates,
    (result, value, _index, candidatesCollection) => {
      if (isUndefined(value)) {
        return result;
      }

      if (isPrime(value)) {
        result.push(value);
        const newlyIneligibleCandidates = map(range(1, (upperLimit / value)), n => (n * value));
        pullAll(candidatesCollection, newlyIneligibleCandidates);
        pullAll(primeNumberCandidates, newlyIneligibleCandidates);
      }



      return result;
    },
    [],
  );

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
