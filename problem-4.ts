{
  // Define Circle and Rectangle types
  interface Circle {
    type: "circle",
    radius: number,
  }
  interface Rectangle {
    type: "rectangle",
    width: number,
    height: number,
  }

  // Define a union type 'Shape' that can be either a Circle or Rectangle
  type Shape = Circle | Rectangle

  // Function to calculate the area based on the shape type
  const calculateShapeArea = (shape: Shape) : number => {
    // Type guard to check circle
    if (shape.type === "circle") {
        const circleString : string = (Math.PI * shape.radius ** 2 ).toFixed(2)
        const circle : number = parseFloat(circleString)
        console.log(circle);
        return circle

    // Type guard to check rectangle
    }else if (shape.type === "rectangle") {
        const rectangle : number = shape.width * shape.height
        console.log(rectangle);
        return rectangle
    }
    throw new Error("Unknown shape type")
  }

  const circleArea = calculateShapeArea({ type: "circle", radius: 5 })
  const rectangleArea = calculateShapeArea({ type: "rectangle", width: 4, height: 6 })

  console.log(circleArea);
  console.log(rectangleArea);
  



}