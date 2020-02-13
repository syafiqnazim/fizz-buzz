const number = 10;

if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
}
