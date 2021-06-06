
const functions = require('../modules/parkingLot.js');

test('leave KA-01-BB-0001 5', () => {
    expect(functions.leaveCar(["","KA-01-BB-0001", 5])).toBe("Registration number KA-01-BB-0001 with Slot number 3 is free with Charge 40");
})
  

  