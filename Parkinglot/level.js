import ParkingSpot from "./parkingspot.js";
import VehicleTypes from "./Vehicletype/vehicletype.js";

class Level {
    constructor(floor, numberOfSpots) {
        this.floor = floor;
        this.parkingSpots = [];
        const spotsForBikes = Math.floor(numberOfSpots * 0.50);
        const spotsForCars = Math.floor(numberOfSpots * 0.40);
        const spotsForTrucks = numberOfSpots - spotsForBikes - spotsForCars;

        let spotNumber = 1;
        for(let i = 0; i < spotsForBikes; i++) {
            this.parkingSpots.push(new ParkingSpot(spotNumber++, VehicleTypes.MOTORCYCLE))
        }
        for(let i = 0; i < spotsForCars; i++) {
            this.parkingSpots.push(new ParkingSpot(spotNumber++, VehicleTypes.CAR))
        }
        for(let i = 0; i < spotsForTrucks; i++) {
            this.parkingSpots.push(new ParkingSpot(spotNumber++, VehicleTypes.TRUCK))
        }
    }

    parkVehicle(vehicle) {
        for(const spot of this.parkingSpots) {
            if(spot.isAvailable() && spot.vehicleType === vehicle.getType()) {
                spot.parkVehicle(vehicle);
                return true;
            }
        }
        return false;
    }

    unParkVehicle(vehicle) {
        for(const spot of this.parkingSpots) {
            if(!spot.isAvailable() && spot.vehicleType === vehicle) {
                spot.unParkVehicle();
                return true;
            }
        }
        return false;
    }

    displayAvailability() {
        console.log(`Level ${this.floor} Availability:`);
        this.parkingSpots.forEach((spot) => {
            const status = spot.isAvailable() ?
            `Available for ${spot.getVehicleType()}` : `Occupied by ${spot.vehicleType} with licenseplate ${spot.parkedVehicle.licensePlate}`;
            console.log(`Spot ${spot.getSpotNumber()}: ${status}`);
        })
    }
}

export default Level;