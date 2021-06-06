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
        input = parseInt(input)
        if (!Number.isInteger(input)) {
            throw new Error('Slot number is missing or invalid');
        }
        maxPARKINGSLOTS = input;
        if (maxPARKINGSLOTS <= 0) {
            // minimum: 1 slot
            throw new Error('Minimum one slot is required to create parking slot');
        }
        for (var i = 0; i < maxPARKINGSLOTS; i++) {
            parkingSlots.push(null);
        }
        return `Created parking lot with ${maxPARKINGSLOTS} slots`;
    },
    /**
     *
     * @param {String} input user's input via terminal
     * @description allocates nearest slot number to incoming cars.
     * It throws an error if parking lot is empty or full.
     */
    parkCar: function (input) {
        var len = parkingSlots.length;
        if (!input) {
            throw new Error('Please provide registration number');
        }
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
                        return 'Allocated slot number: ' + i;
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
    leaveCar(input) {
        if (!input[1] || !input[2]) {
            throw new Error('Please provide registration number and hours');
        }
        if (maxPARKINGSLOTS > 0) {
            var carNumber = input[1];
            let parkingFound;
            for (var index = 0; index < maxPARKINGSLOTS; index++) {
                if (parkingSlots[index] && parkingSlots[index].number === carNumber) {
                    parkingSlots[index] = null;
                    input[2] = parseInt(input[2])
                    let charge = (2 >= input[2]) ? 10 : (input[2] - 2) * 10 + 10;
                    parkingFound = true
                    return `Registration number ${input[1]} with Slot number ${index + 1} is free with Charge ${charge}`;
                }
            }
            if(!parkingFound){
                return `Registration number ${input[1]} not found`;
            }
        }
        else {
            throw new Error(`No slot availaible for parking`);
        }
    },
    /**
     * @description Returns string containing parking details i.e. slot no, registration number
     */
    getParkingStatus() {
        var result = ''
        if (maxPARKINGSLOTS > 0) {
            result += 'Slot No. Registration No. \n'
            for (var i = 0; i < parkingSlots.length; i++) {
                if (parkingSlots[i] != null) {
                    var e = i + 1;
                    result += e + '.  ' + parkingSlots[i].number +"\n"
                }
            }
            return result;
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
    var ele = false;
    for (var i = 0; i < parkingSlots.length; i++) {
        if (parkingSlots[i] == null) {
            ele = true;
        }
    }
    return ele;
}
module.exports = ParkingLot;
