let store = {drivers: [], passengers: [], trips: []}

let driverID = 0

class Driver {
  constructor(name) {
    this.id = ++driverID
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    let driverPs = []
    this.trips().forEach(function(trip) {
       let pass = store.passengers.filter(passenger => passenger.id === trip.passengerId)
       driverPs.push(pass)
    })
    return (driverPs.reduce((a, b) => a.concat(b), []));
  }
}

let passengerID = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerID
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    let passengerDs = []
    this.trips().forEach(function(trip) {
      let driver = store.drivers.filter(driver => driver.id === trip.driverId)
      passengerDs.push(driver)
    })
    return (passengerDs.reduce((a, b) => a.concat(b), []));
  }
}

let tripID = 0

class Trip {
  constructor(driver, passenger) {

    this.id = ++tripID
    if (passenger) {
      this.passengerId = passenger.id
    }
    if (driver) {
      this.driverId = driver.id
    }

    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
