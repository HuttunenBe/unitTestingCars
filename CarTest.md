# Huttunen_Beniitta_Car test cases

## Constructor x2
- Test 1: When given no data → should throw 'data storage missing'
- Test 2: Given data → should make CarStorage object

## get_a_car_matching_id x4
- Test 1: Given id 1 → should return car with id 1
- Test 2: Given no id → should throw 'missing parameter'
- Test 3: Given id as string '1' → should return null
- Test 4: Given id 999 (not exist) → should return null

## get_all_cars_by_model x3
- Test 1: Given 'chrome' → should return cars with matching model
- Test 2: Given nothing → should throw 'missing parameter'
- Test 3: Given 'nonexistent' → should return an empty array

## get_total_price_of_cars_by_model x3
- Test 1: Given 'nonexistent' → should throw 'nothing found with given searchValue'
- Test 2: Given 'chrome' → should return 36
- Test 3: Given nothing → should throw 'missing parameter'

## get_info x3
- Test 1: Given id 1 → should return object {consumptionPer100km: 3, powerSource: 'hybrid', notes: 'low emission'}
- Test 2: Given no id → should throw 'missing parameter'
- Test 3: Given id 999 → should return null

## get_car_colors x5
- Test 1: Given id 1 → should return array 'blue','orange','black'
- Test 2: Given id 3 → should return array 'red','white','yellow'
- Test 3: Given id 999 → should return an empty array
- Test 4: Given no id → should throw 'missing parameter'
- Test 5: Checks that at least one car is black → should return true

## Extra - edge cases
- Test 1: Make empty CarStorage → all methods still work
  - get_a_car_matching_id(1) → null
  - get_total_price_of_cars_by_model('any') → throw
  - get_All_cars_By_model('any') → empty array
  - get_info(1) → null
  - get_car_colors(1) → empty array
