const range = require('lodash/range');
const filter = require('lodash/filter');
const isEqual = require('lodash/isEqual');
const partial = require('lodash/partial');
const sortBy = require('lodash/sortBy');
const reduce = require('lodash/reduce');
const map = require('lodash/map');
const difference = require('lodash/difference');

function calculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const effectiveUpperLimit = Math.sqrt(upperLimit);

  const primeNumbers = reduce(
    primeNumberCandidates,
    (result, candidate) => {
      if (candidate > effectiveUpperLimit) {
        return result;
      }

      if (isPrime(parseInt(candidate, 10))) {
        const newlyIneligibleCandidates = multiplesToUpperLimit(candidate, upperLimit);

        return difference(result, newlyIneligibleCandidates);
      }
      return difference(result, [candidate]);
    },
    primeNumberCandidates,
  );

  return median(primeNumbers);
}

function multiplesToUpperLimit(number, upperLimit) {
  return map(range(number, (upperLimit / number)), n => (n * number));
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
  const { length } = sorted;

  const isEven = isDivisible(length, 2);

  if (isEven) {
    return sorted.slice((length / 2 - 1), (length / 2 + 1));
  }

  return [sorted[Math.floor(length / 2)]];
}

module.exports = calculateMedianPrimeNumbers;
