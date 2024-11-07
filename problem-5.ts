{

    interface Person {
        name: string;
        age: number;
    }



  // Define a generic function getProperty
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
  }

  const person: Person = { name: "Alice", age: 30 }
  console.log(getProperty(person, "name")); 
  console.log(getProperty(person, "age")); 
}
