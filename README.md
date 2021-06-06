## About Applications

This is a console application written in `Node.js`. This can be run in two modes:

1. **Interactive Mode**: An interactive terminal based shell where commands can be typed in to perform different actions.

2. **File Mode**: It accepts a filename as a parameter at the terminal and read the commands from that file.

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < REGISTRATION NUMBER > < COLOR >**: `park KA-01-HH-1234` will allocate the nearest slot from entry gate.

- **leave**: `leave KA-01-HH-1234 4` will make slot free of registered car.

- **status**: `status` will display cars and their slot details

## steps 

Open terminal and type the following:

1. `cd parking_lot` : Navigates to the `parking_lot` root folder.

2. `npm install` : Installs all the dependencies.

3. `npm start` : Starts the console application in interactive mode.

4. `node src/index.js data/input.txt` : Runs the application in file mode.

5. `npm test test/run.test.js` : Runs all the tests.



