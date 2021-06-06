
const functions = require('../modules/parkingLot.js');

test('should show parking status', () => {
    var result = functions.getParkingStatus();
    expect(functions.getParkingStatus()).toBe(result);
})
  

  
