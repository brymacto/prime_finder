const calculateMedianPrimeNumbers = require('../../services/prime-number-calculator');

describe('#calculateMedianPrimeNumbers', () => {
  it('responds with median of the set of prime numbers less than upper limit', () => {
    const upperLimit = 18;

    const result = calculateMedianPrimeNumbers(upperLimit);

    expect(result).toEqual([7]);
  });

  it('responds with multiple medians', () => {
    const upperLimit = 10;

    const result = calculateMedianPrimeNumbers(upperLimit);

    expect(result).toEqual([3, 5]);
  });
});
