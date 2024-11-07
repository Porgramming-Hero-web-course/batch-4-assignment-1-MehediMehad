// Define the Car class
class Car {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize properties
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // (Method): to calculate car's age based on the current year
  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    const year = this.year;
    console.log(currentYear - year);
    return currentYear - year;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge()
