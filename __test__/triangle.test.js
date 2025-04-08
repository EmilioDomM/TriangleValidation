
const triangleType = require("../triangle");

test('should return invalid if any of the inputs are below 1', () => {
  expect(triangleType(1,0,1)).toBe("Invalid");
});

test('should return invalid if its sides do not meet the requirements of a triangle', () => {
  expect(triangleType(20,17,2)).toBe("Invalid");
  expect(triangleType(20,2,17)).toBe("Invalid");
  expect(triangleType(2,17,20)).toBe("Invalid");
});

test('should return equilateral if its sides are the same', () => {
  expect(triangleType(4,4,4)).toBe("Equilateral")
});

test('should return isosceles if 2 sides are the same', () => {
    expect(triangleType(4,4,6)).toBe("Isosceles");
    expect(triangleType(6,4,4)).toBe("Isosceles");
    expect(triangleType(4,6,4)).toBe("Isosceles");
});
 
test('should return scalene if its sides are all different', () => {
    expect(triangleType(5,7,6)).toBe("Scalene")
});