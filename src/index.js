// Import Readline Module for command line
const readLine = require('readline');
const fs = require('fs');
const parkingLot = require('./modules/parkingLot.js');

// to avoid memory leaks errors, default max listeners = 10
require('events').EventEmitter.defaultMaxListeners = 0;

var commandLineInputs = process.argv;
var interactiveMode = false

if (commandLineInputs[commandLineInputs.length - 1].endsWith('.txt')) {
    interactiveMode = false;
    fs.readFile(commandLineInputs[2], 'utf-8', function (err, data) {
        if (err) {
            console.log('Error in reading file');
        }
        var arr = data.split('\n');
        for (var i = 0; i < arr.length; i++) {
            processUserCommands(arr[i]);
        }

        // returning to console once all the inputs are processed
        process.exit(1);
    });
}
else {
    interactiveMode = true;
    openInteractiveConsole();
}


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
    var userCommand = userInput[0];
    switch (userCommand) {
        case 'create_parking_lot':
            try {
                let result = parkingLot.createParkingLot(userInput[1]);
                console.log(result);
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'park':
            try {
                let result = parkingLot.parkCar(userInput[1]);
                console.log(result);
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'leave':
            try {
                let result = parkingLot.leaveCar(userInput);
                console.log(result);
            }
            catch (err) {
                console.log(err.message);
            }
            break;
        case 'status':
            try {
                let result = parkingLot.getParkingStatus();
                console.log(result)
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