const values = {
  'amount': 100000,
  'years': 30,
  'rate': 0.05
};

describe('calculateMonthlyPayment', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(values)).toBe('536.82');
  });

  it("should return a result that is a string", function() {
    expect(typeof(calculateMonthlyPayment(values))).toBe('string');
  });

  it("should return a result with 2 decimal places", function() {
    const noDecimal = {
      'amount': 100033,
      'years': 30,
      'rate': 0.05
    };
    const oneDecimal = {
      'amount': 100051,
      'years': 30,
      'rate': 0.05
    };    
    const resultNoDecimal = calculateMonthlyPayment(noDecimal);
    expect(resultNoDecimal[resultNoDecimal.length - 3]).toBe('.');
    const resultOneDecimal = calculateMonthlyPayment(oneDecimal);
    expect(resultOneDecimal[resultOneDecimal.length - 3]).toBe('.');
  });
});