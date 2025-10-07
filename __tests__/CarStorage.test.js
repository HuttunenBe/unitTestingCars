const CarStorage = require("../CarStorage");
const data = require("../datastorage.json");

let carStorage;

beforeAll(() => {
  carStorage = new CarStorage(data);
});

// constructor

test("error if no data given", () => {
  expect(() => new CarStorage()).toThrow("data storage missing");
});

test("can make CarStorage if data is given", () => {
  const storage = new CarStorage(data);
  expect(storage).toBeInstanceOf(CarStorage);
});

// get_a_car_matching_id

test("find car by id", () => {
  const car = carStorage.get_a_car_matching_id(1);
  expect(car.id).toBe(1);
});

test("id must be number string input", () => {
  const car = carStorage.get_a_car_matching_id("1");
  expect(car).toBeNull();
});

test("car price is number", () => {
  const car = carStorage.get_a_car_matching_id(2);
  expect(typeof car.price).toBe("number");
});

test("error if key missing", () => {
  expect(() => carStorage.get_a_car_matching_id()).toThrow("missing parameter");
});

test("return null if id not found", () => {
  const car = carStorage.get_a_car_matching_id(999);
  expect(car).toBeNull();
});

test("first car has name Ovlov", () => {
  const car = carStorage.get_a_car_matching_id(1);
  expect(car.carname).toBe("Ovlov");
});

test("first car has name Ovlov", () => {
  const car = carStorage.get_a_car_matching_id(2);
  expect(car.carname).toBe("Electro");
});

// get_all_cars_by_model

test("error if value is missing", () => {
  expect(() => carStorage.get_All_cars_By_model()).toThrow("missing parameter");
});

test("find cars by model", () => {
  const cars = carStorage.get_All_cars_By_model("chrome");
  expect(cars.length).toBe(1);
  expect(cars[0].model).toBe("chrome");
});

test("there is a car with model GT", () => {
  const cars = carStorage.get_All_cars_By_model("GT");
  expect(cars.length).toBe(1);
});

test("return empty array if model not found", () => {
  const cars = carStorage.get_All_cars_By_model("nonexistent");
  expect(cars).toEqual([]);
});

// get_total_price_of_cars_by_model

test("error if no car matches model", () => {
  expect(() =>
    carStorage.get_total_price_of_cars_by_model("nonexistent")
  ).toThrow("nothing found with given searchValue");
});

test("throws error if model missing", () => {
  expect(() => carStorage.get_total_price_of_cars_by_model()).toThrow(
    "missing parameter"
  );
});

test("get total price for cars with model", () => {
  const price = carStorage.get_total_price_of_cars_by_model("chrome");
  expect(price).toBe(36);
});

// get_info

test("get info for car", () => {
  const info = carStorage.get_info(1);
  expect(info.consumptionPer100km).toBe(3);
  expect(info.powerSource).toBe("hybrid");
  expect(info.notes).toBe("low emission");
});

test("car info exists", () => {
  const info = carStorage.get_info(2);
  expect(info).not.toBeNull();
});

test("return null if id missing", () => {
  expect(() => carStorage.get_info()).toThrow("missing parameter");
});

test("return null if car not found", () => {
  const info = carStorage.get_info(999);
  expect(info).toBeNull();
});

// get_car_colors

test("car has black color", () => {
  const colors = carStorage.get_car_colors(1);
  expect(colors).toContain("black");
});

test("get colors for cars with id 1", () => {
  const colors = carStorage.get_car_colors(1);
  expect(colors).toEqual(["blue", "orange", "black"]);
});

test("get colors for cars with id 3", () => {
  const colors = carStorage.get_car_colors(3);
  expect(colors).toEqual(["red", "white", "yellow"]);
});

test("returns empty array if id not found", () => {
  const colors = carStorage.get_car_colors(999);
  expect(colors).toEqual([]);
});

test("some car has black color", () => {
  const hasBlack = carStorage.data.some(
    (car) => car.colors && car.colors.includes("black")
  );
  expect(hasBlack).toBe(true);
});

test("return empty array if id missing", () => {
  expect(() => carStorage.get_car_colors()).toThrow("missing parameter");
});

test("check car price is a number", () => {
  const car = carStorage.get_a_car_matching_id(2);
  expect(typeof car.price).toBe("number");
});

// extra -> check for edge cases

test("all methods work if no cars", () => {
  const empty = new CarStorage([]);
  expect(empty.get_a_car_matching_id(1)).toBeNull();
  expect(() => empty.get_total_price_of_cars_by_model("any")).toThrow();
  expect(empty.get_All_cars_By_model("any")).toEqual([]);
  expect(empty.get_info(1)).toBeNull();
  expect(empty.get_car_colors(1)).toEqual([]);
});
