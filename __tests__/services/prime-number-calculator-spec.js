const calculateMedianPrimeNumbers = require('../../services/prime-number-calculator');

describe('#calculateMedianPrimeNumbers', () => {
  it.only('WIP: responds with prime numbers less than upper limit', () => {
    const upperLimit = 18;

    const result = calculateMedianPrimeNumbers(upperLimit);

    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });

  it('responds with median of the set of prime numbers less than upper limit', () => {
    const upperLimit = 18;

    const result = calculateMedianPrimeNumbers(upperLimit);

    expect(result).toEqual([7]);
  });
});
