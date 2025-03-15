// import Level from "Level";
// import Vehicle from "Vehicle";

class ParkingLot {
    constructor() {
        if(ParkingLot.instance) {
            return ParkingLot.instance;
        }
        this.levels = [];
        ParkingLot.instance = this;
    }
    static getInstance() {
        if (!ParkingLot.instance) {
            new ParkingLot();  // This will call the constructor
        }
        return ParkingLot.instance;
    }

    addLevel(level) {
        this.levels.push(level);
    }
    parkVehicle(vehicle) {
        for(const level of this.levels) {
            if(level.parkVehicle(vehicle)) {
                console.log("Vehicle parked successfully");
                return true;
            }
        }
        console.log("Could not park vehicle.");
        return false;
    }
    unparkVehicle(vehicle) {
        for (const level of this.levels) {
          if (level.unParkVehicle(vehicle)) {
            return true;
          }
        }
        return false;
    }

    displayAvailability() {
        for (const level of this.levels) {
          level.displayAvailability();
        }
    }
}

const parkingLotInstance = new ParkingLot();
Object.freeze(parkingLotInstance);

export default ParkingLot;