const range = require('lodash/range');
const filter = require('lodash/filter');
const isEqual = require('lodash/isEqual');
const partial = require('lodash/partial');
const sortBy = require('lodash/sortBy');
const reduce = require('lodash/reduce');
const map = require('lodash/map');
const forEach = require('lodash/forEach');
const pickBy = require('lodash/pickBy');
const keys = require('lodash/keys');

function calculateMedianPrimeNumbers(upperLimit) {
  const primeNumberCandidates = range(2, upperLimit);

  const isPrimeEligible = reduce(primeNumberCandidates,
    (result, value) => {
      (result)[value] = true;
      return result;
    },
    {},
  );

  const primeNumbersDictionary = reduce(
    isPrimeEligible,
    (result, stillEligible, candidate, candidatesCollection) => {
      if (stillEligible === false) {
        return candidatesCollection;
      }
      if (isPrime(parseInt(candidate, 10))) {
        const newlyIneligibleCandidates = map(range(1, (upperLimit / candidate)), n => (n * candidate));
        forEach(newlyIneligibleCandidates, (newlyIneligibleCandidate) => {
          candidatesCollection[newlyIneligibleCandidate] = false;
        });
        candidatesCollection[candidate] = true;
      } else {
        candidatesCollection[candidate] = false;
      }

      return candidatesCollection;
    },
    {},
  );

  const primeNumbers = map(keys(pickBy(primeNumbersDictionary, numberIsPrime => numberIsPrime)), intString => parseInt(intString, 10));

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
