"use strict";
const data = require("./datastorage.json");

// constructor(jsondata)

class CarStorage {
  constructor(jsondata) {
    if (!jsondata) throw new Error("data storage missing"); // throw error if not found
    this.data = jsondata; // store data
  }

  // get_a_car_matching_id

  get_a_car_matching_id(searchKey) {
    if (searchKey === undefined) throw new Error("missing parameter"); // require searchkey - throw error
    return this.data.find((car) => car.id === searchKey) || null;
    // stop when found -> unique -> first match or null
  }

  // get_All_cars_By_model

  get_All_cars_By_model(searchValue) {
    if (!searchValue) throw new Error("missing parameter"); // model name required
    return this.data.filter((car) => car.model === searchValue) || [];
  } // filter goes trough all -> return all matches

  // get_total_price_of_cars_by_model

  get_total_price_of_cars_by_model(searchValue) {
    if (!searchValue) throw new Error("missing parameter");
    const cars = this.get_All_cars_By_model(searchValue); // get all matches

    if (cars.length === 0)
      throw new Error("nothing found with given searchValue");
    return cars.reduce((total, car) => total + car.price, 0); // sum up prices
  }

  // get_info

  get_info(searchKey) {
    const car = this.get_a_car_matching_id(searchKey); // find by id
    return car?.info || null; // return info or null
  }

  // get_car_colors

  get_car_colors(searchKey) {
    const car = this.get_a_car_matching_id(searchKey); // find by Id
    return car?.colors || []; // return color or empty array
  }
}

module.exports = CarStorage;
