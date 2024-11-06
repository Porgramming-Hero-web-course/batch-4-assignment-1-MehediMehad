// Type alias 'NumberArray' to define an array of numbers
type NumberArray = number[];

// Function to remove duplicates from the array
const removeDuplicates = (array: NumberArray ): NumberArray =>{

    // Using a Set to automatically remove duplicates
    const uniqArray : NumberArray = [... new Set(array)]  
    console.log(uniqArray);
    return uniqArray
}

removeDuplicates([1, 2, 3, 2, 5, 1, 3, 4, 4, 7, 9, 1,])