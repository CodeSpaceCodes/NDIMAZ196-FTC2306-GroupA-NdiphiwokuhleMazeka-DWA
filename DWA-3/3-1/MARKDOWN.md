# Balance Calculator Documentation

## Introduction

This program calculates the balance after deductions were made from the gross salary. Deductions include tax, food, transport, and accommodation expenses. It provides detailed documentation for the variables, functions, and data structures used in the calculation. After calculation, the program displays the final balance after all the decuctions have been made. The program is suitable for determining the best option for saving money by calculation the best combination that could be selected for accommodation in order to save money if that is the aim.

- [Balance Calculator Documentation](#balance-calculator-documentation)
  - [Introduction](#introduction)
  - [Variables](#variables)
    - [`salary` (Type: Number)](#salary-type-number)
    - [`lodging` (Type: String)](#lodging-type-string)
    - [`size` (Type: String)](#size-type-string)
    - [`expenses` (Type: Expences)](#expenses-type-expences)
    - [`tax` (Type: Object)](#tax-type-object)
    - [`rent` (Type: RentObject)](#rent-type-rentobject)
  - [Methods](#methods)
    - [`findTax(getString: String): number`](#findtaxgetstring-string-number)
    - [`findNet(getSalary: number, getTax: number): number`](#findnetgetsalary-number-gettax-number-number)
    - [`findAccommodationType (getObject: RentObject, getSize: String, getType: String): number`](#findaccommodationtype-getobject-rentobject-getsize-string-gettype-string-number)


## Variables

### `salary` (Type: Number)

This is the gross amount earned.

### `lodging` (Type: String)

This is the type of lodge used. It has an effect on the amount paid for accommodation.

### `size` (Type: String)

This is the size of the accommodation. It is used in combination with `lodging` to determine the accommodation pricing.

### `expenses` (Type: Expences)

An object containing basic personal expenses to be incurred, excluding accommodation. These include:

- `food`: The amount spent on food (Type: Number).
- `Transport`: The amount spent on transport (Type: Number).

### `tax` (Type: Object)

A tax bracket object with options for tax percentages and their correcponding values.

### `rent` (Type: RentObject)

An object containing accommadation costs based on the size and lodge type.

## Methods

### `findTax(getString: String): number`

Converts the tax percentage string to a decimal value.

- `getString` (Type: String): Tax percentage string
- Returns (Type: Number): Decimal value of the tax percentage

### `findNet(getSalary: number, getTax: number): number`

Calculates the net balance of the salary after tax deductions from the gross salary.

- `getSalary` (Type: number): Gross salary.
- `getTax` (Type: number): Tax convesrion factor.
- Returns (Type: number): Net salary after tax deductions.

### `findAccommodationType (getObject: RentObject, getSize: String, getType: String): number`

Finds the cost of accommodation based on the predefined costs in `getObject` according to the resulting match from the combination of `getSize` and `getType` when interpolated.

- `getObject` (Type: RentObject): Object containing predefined accommodation costs.
-  `getSize` (Type: String): Size of the accommodation.
-  `getType` (Type: String): Type of the accommodation.
-  Returns (Type: number): Cost of accommodation.