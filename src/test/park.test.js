
const functions = require('../modules/parkingLot.js');

test('park KA-01-HH-1234', () => {
    expect(functions.parkCar('KA-01-HH-1234')).toBe("Allocated slot number: 1");
})

test('park KA-01-HH-9999', () => {
    expect(functions.parkCar('KA-01-HH-9999')).toBe("Allocated slot number: 2");
})

test('park KA-01-BB-0001', () => {
    expect(functions.parkCar('KA-01-BB-0001')).toBe("Allocated slot number: 3");
})

test('park KA-01-HH-7777', () => {
    expect(functions.parkCar('KA-01-HH-7777')).toBe("Allocated slot number: 4");
})

test('park KA-01-HH-2701', () => {
    expect(functions.parkCar('KA-01-HH-2701')).toBe("Allocated slot number: 5");
})

test('park KA-01-HH-3141', () => {
    expect(functions.parkCar('KA-01-HH-3141')).toBe("Allocated slot number: 6");
})
  

  
