import ParkingLot from './parkinglot.js';
import Level from './Level.js';
import Car from './Vehicletype/car.js';
import Truck from './Vehicletype/truck.js';
import Motorcycle from './Vehicletype/motorcycle.js';

class ParkingLotDemo {
  static run() {
    const parkingLot = ParkingLot.getInstance();
    
    // Add levels to the parking lot
    parkingLot.addLevel(new Level(1, 10));
    parkingLot.addLevel(new Level(2, 10));

    // Create vehicle instances
    const car = new Car("ABC123");
    const truck = new Truck("XYZ789");
    const motorcycle = new Motorcycle("M1234");

    // Park vehicles
    parkingLot.parkVehicle(car);
    parkingLot.parkVehicle(truck);
    parkingLot.parkVehicle(motorcycle);

    // Display parking spot availability
    parkingLot.displayAvailability();

    // Unpark the motorcycle
    parkingLot.unparkVehicle(motorcycle);

    // Display updated availability
    parkingLot.displayAvailability();
  }
}

// Run the demo
ParkingLotDemo.run();
