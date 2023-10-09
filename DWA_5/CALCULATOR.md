# Whole Number Divider

## Introduction

This file gives insight of a program that was used to develop a whole number divider calculator. The Functionality of this calculator is based on the following user stories that had been provided using Gherkin syntax.

## User Stories

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND -3 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

## Variables

### `data` (Type: Object)

Object contains the error data message template strings that should be thrown
where applicable.

#### Properties

#### `missingNumber` (Type: String)

Template string for empty input error.

#### `invalidNumber` (Type: String)

Template string for invalid number input error.

#### `invalidInputs` (Type: String)

Template string for invalid input error.

### `html` (Type: Object)

Object retrieves the specific HTML document nodes that are used by this program,
by first validating their existance through the `getHtml` method.