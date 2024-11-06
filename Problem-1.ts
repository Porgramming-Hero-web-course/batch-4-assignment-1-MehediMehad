
// Type alias 'NumberArray' to define an array of numbers
type NumberArray = number[];

// Function 'sumArray' to calculate the sum of elements in an array
const sumArray = (array: NumberArray): number => {
  const sum = array.reduce((totalSum: number, currentValue: number) => totalSum + currentValue, 0);
  console.log(sum);
  return sum;
};

sumArray([1, 2, 3, 4, 5, 5, 5]);

