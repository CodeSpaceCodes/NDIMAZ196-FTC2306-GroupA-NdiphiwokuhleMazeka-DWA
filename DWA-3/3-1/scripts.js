// @ts-check

/**
 * this is the gross amount one earns.
 * @type { number } salary
 */
const salary = 4000;

/**
 * This is the type of the lodge used and it has an effect on the price being
 * paid for an accommodation.
 * @type { string } lodge
 */
const lodging = 'house'

/**
 * this is the size of the accommodation used, and is coupled with
 * {@link lodging} to determine the price that would be paid for an
 * accommodation
 * @type { string } size
 */
const size = 'small'


// Only change the syntax below (not the values or key names)
/**
 * This is object that contains the list of expences to be incured by a person
 * and their values
 * @typedef { Object } Expences
 * @property { number } food - Amount the will be spent on food
 * @property { number } transport - Amount the will be spent on transport
 */

/**
 * @type { Expences }
 */
const expenses = {
    food: 51.7501,
    transport:  10.2
}

/**
 * This is a tax bracket object with a number of option to select from according
 * to the tax bracket applicable to an inividual.
 * @type {{ '734': string, '234': string, '913': string, '415': string, '502': string }}
 */
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%'
}
// fixed the variable or identifier syntax (put quotes around em)

/**
 * This Object contains the accomodation costs as per size and lodge type.
 * @typedef { Object } RentObject
 * @property { number } none - no accomodation selected
 * @property { number } small-room - most affordable combination
 * @property { number } large-room  - second most affordable combination
 * @property { number } small-apartment - nice combination
 * @property { number } large-apartment - fancy combination
 * @property { number } small-house - second laxurious combination
 * @property { number } large-house - laxurious combination
 */

/**
 * @type { RentObject }
 */
const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400
}

// You can change below however you want

/**
 * Function takes a string of a tax percentage and converts it to a decimal
 * value then uses it to find a tax conversion factor.
 * @param { string } getString 
 * @returns { number } 
 */
const findTax = (getString) => parseFloat(getString)/100;

/**
 * Function finds the net salary after tax deduction
 * @param { number } getSalary
 * @param { number } getTax 
 * @returns { number }
 */
const findNet = ( getSalary, getTax ) => getSalary *(1 - getTax)

/**
 * Function finds the cost of accomodation according to the predefined costs
 * found in `getObjet` that match the combination of inputs `getSize` and
 * `getType`
 * @param { Object } getObject - Object contains predefined combination types of
 * the available accommodations and their respecive costs
 * @param { string } getSize - This is the size of the accomodation
 * @param { string } getType - This is the type of the accomodation
 * @returns { number }
 */
const findAccommodationType = ( getObject, getSize, getType ) => getObject[`${getSize}-${getType}`];

const taxAsDecimal = findTax(tax['913']);
const startingAfterTax = findNet( salary, taxAsDecimal );
const accomodationType = findAccommodationType( rent, size, lodging );

const balance = startingAfterTax - expenses.transport - expenses.food - accomodationType;

console.log(balance.toFixed(2));       