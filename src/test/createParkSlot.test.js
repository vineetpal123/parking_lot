
const functions = require('../modules/parkingLot.js');

test('should create 6 parking slots', () => {
    expect(functions.createParkingLot(6)).toBe("Created parking lot with 6 slots");
})
  

  
