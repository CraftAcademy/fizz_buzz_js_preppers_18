function FizzBuzz() {

  function hasZeroReminder(number, divider) {
    return (number % divider) === 0;
  }

  this.check = function(number) {
    if (hasZeroReminder(number, 15)) {
      return 'fizz-buzz'
    } else if (hasZeroReminder(number, 3)) {
      return 'fizz';
    } else if (hasZeroReminder(number, 5)) {
      return 'buzz'
    } else {
      return number;
    }
  }
}
