'use strict'

var maxPARKINGSLOTS = 0
var parkingSlots = new Array();

const ParkingLot = {
    /**
     *
     * @param {String} input user's input via terminal
     * @description creates a parking lot with given maximum slot numbers.
     * It throws an error if zero or negative input is provided
     */
    createParkingLot: function (input) {
        maxPARKINGSLOTS = input;
        if (maxPARKINGSLOTS <= 0) {
            // minimum: 1 slot
            throw new Error('Minimum one slot is required to create parking slot');
        }
        for (var i = 0; i < maxPARKINGSLOTS; i++) {
            parkingSlots.push(null);
        }
        return maxPARKINGSLOTS;
    },
    /**
     *
     * @param {String} input user's input via terminal
     * @description allocates nearest slot number to incoming cars.
     * It throws an error if parking lot is empty or full.
     * It also throws an error if only one field (either registration number or color) is provided.
     */
    parkCar: function (input) {
        var len = parkingSlots.length;
        if (maxPARKINGSLOTS > 0) {
            var car;
            if (findNearestAvailableSlot() == true) {
                for (var i = 0; i < len; i++) {
                    if (parkingSlots[i] == null) {
                        car = {
                            number: input
                        };
                        parkingSlots[i] = car;
                        i = i + 1;
                        return i;
                    }
                }
            }
            else {
                throw new Error('Sorry, parking lot is full');
            }
        }
        else {
            throw new Error('Minimum one slot is required to create parking slot');
        }
    },
    /**
	 *
	 * @param {String} input user's input via terminal
	 * @description it makes the slot free for the car of given registration number.
	 * It throws an error if car is not found.
	 */
	leaveCar (input) {
		if (maxPARKINGSLOTS > 0) {
			var carNumber = input[1];
		    for (var index = 0; index < maxPARKINGSLOTS; index++) {
				if (parkingSlots[index].number === carNumber) {
					parkingSlots[index] = null;
					return index + 1;
				}
			}
		}
		else {
			throw new Error('Sorry, car with given registration is not found');
		}
	},
    /**
     * @description Returns an array containing parking details i.e. slot no, registration number and color
     */
    getParkingStatus() {
        var arr = new Array();
        if (maxPARKINGSLOTS > 0) {
            arr.push('Slot No. Registration No. ');

            // use binary search here
            for (var i = 0; i < parkingSlots.length; i++) {
                if (parkingSlots[i] != null) {
                    var e = i + 1;
                    arr.push(e + '.  ' + parkingSlots[i].number);
                }
            }
            return arr;
        }
        else {
            throw new Error('Sorry, parking lot is empty');
        }
    }
}
/**
    * @description returns the nearest available slot
    * used by parkCar() method to find nearest slot
*/
function findNearestAvailableSlot() {
    console.log('parkingSlots', parkingSlots)
    var ele = false;
    for (var i = 0; i < parkingSlots.length; i++) {
        if (parkingSlots[i] == null) {
            ele = true;
        }
    }
    return ele;
}
module.exports = ParkingLot;
