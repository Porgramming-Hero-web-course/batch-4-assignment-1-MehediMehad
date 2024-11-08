interface Person {
  name: string;
  age: number;
  email: string;
  roll?: string;
}

const person = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

function validateKeys<T extends Person>(obj: T, keys: (keyof T)[]): boolean {
    if (keys.every((key) => key in obj)) {
        return true;
    }
    return false
}
validateKeys( person, ["name", "age"]);

console.log(validateKeys( person, ["name", "age"]));
