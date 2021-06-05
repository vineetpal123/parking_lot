// Import Readline Module for command line
const readLine = require('readline');
const fs = require('fs');
const parkingLot = require('./modules/parkingLot.js');

var commandLineInputs = process.argv;
console.log('commandLineInputs', commandLineInputs)
var interactiveMode = true
openInteractiveConsole();
/**
 * @description called when users want to interact via console
 * it process one command at a time
 */
function openInteractiveConsole() {

    var cmd = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // option for user to enter commands
    if (interactiveMode) {
        cmd.question('Input: ', function (data) {
            processUserCommands(data);
        });
    }
}

/**
 *
 * @param {String} input entered via console
 * @description driver function for different commands for entered by users
 * calls respective functions of ParkingLot class based on commands
 */
function processUserCommands(input) {
    var userInput = input.trim().split(' ')
    var userCommand = userInput[0],
        totalParkingSlots,
        parkingSlotNumber,
        parkingSlotNumbers;
    switch (userCommand) {
        case 'create_parking_lot':
            try {
                userInput[1] = parseInt(userInput[1])
                if (Number.isInteger(userInput[1])) {
                    totalParkingSlots = parkingLot.createParkingLot(userInput[1]);
                    console.log('Created a parking lot with ' + totalParkingSlots + ' slots.');
                } else {
                    console.log('Invalid slot');
                }
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'park':
            try {
                if (userInput[1]) {
                    parkingSlotNumber = parkingLot.parkCar(userInput[1]);
                    console.log('Allocated slot number: ' + parkingSlotNumber);
                } else {
                    console.log('Please provide registration number');
                }
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'leave':
            try {
                if (userInput[1] && (userInput[2])) {
                    parkingSlotNumber = parkingLot.leaveCar(userInput);
                    userInput[2] = parseInt(userInput[2])
                    let charge = (2>=userInput[2]) ? 10 : (userInput[2]-2) * 10 + 10;
                    console.log("Registration number " + userInput[1] + ' with Slot number ' + parkingSlotNumber + ' is free with Charge '+ charge);
                }else{
                    console.log('Please provide registration number and hours');
                }
            }
            catch (err) {
                console.log(err.message); // handling exceptions
            }
            break;
        case 'status':
            try {
                var parkingSlotStatus = parkingLot.getParkingStatus();
                if (parkingSlotStatus.length > 1) {
                    console.log(parkingSlotStatus.join('\n'));
                }
                else {
                    console.log('Sorry, parking lot is empty'); // what if it's empty
                }
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'exit':
            process.exit(0);
            break;
        default:
            console.log(input, 'is an invalid command');
            break;
    }

    openInteractiveConsole();
}