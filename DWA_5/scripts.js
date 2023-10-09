/**
 * Object contains the error data message template strings that should be thrown
 * where applicable.
 * @type {Object} data
 * @prop {String} missingNumber - Template string for empty input error.
 * @prop {String} invalidNumber - Template string for invalid number input error.
 * @prop {String} invalidInputs - Template string for invalid input error.
 */
const data = {
  missingNumber: `Division not performed. Both values are required in inputs. Try again`,
  invalidNumber: `Division not performed. Invalid number provided. Try again`,
  invalidInputs: `Something critical went wrong. Please reload the page`,
};

/**
 * Function validates the availability of the node being referenced and used bu
 * the program. If the node does not exist, it throws an error. Otherwise it
 * returns the node of interest.
 * @param {String} label - The data attribute string used to reference the
 * specific HTML node.
 * @returns {Node | Error}
 */
const getHtml = (label) => {
  const node = document.querySelector(`[${label}]`);
  if (!(node instanceof HTMLElement)) {
    throw new Error(`Node ${label} is not found in the HTML file`);
  }
  return node;
};

/**
 * Object retrieves the specific HTML document nodes that are used by this
 * program, by first validating their existance through the function
 * {@link getHtml}
 * @type {Object} - html
 */
const html = {
  form: getHtml('data-form'),
  result: getHtml('data-result'),
};

/**
 * Function checks if the inputs have been entered in the input fiels by the
 * user. If not, it returns an error, otherwise it returns nothing.
 * @param {String} input1 - Fisrt string value read from the DOM as entered by
 * the user
 * @param {String} input2 - Second string value read from the DOM as entered by
 * the user
 * @returns {void | Error}
 */
const isMissingInput = (input1, input2) => {
  const isEmpty1 = input1.trim().length === 0;
  const isEmpty2 = input2.trim().length === 0;

  if (isEmpty1 || isEmpty2) {
    throw new Error(`${data.missingNumber}`);
  }
};

/**
 * Function validates whether each number provided is a valid number for the
 * calculation purposes or not. If any value is invalid, it returns an error,
 * otherwise it returns nothing.
 * @param {String} input1 - Fisrt string value read from the DOM as entered by
 * the user
 * @param {String} input2 - Second string value read from the DOM as entered by
 * the user
 * @returns {void | Error}
 */
const hasInvalidNumber = (input1, input2) => {
  const number1 = isNaN(parseInt(input1, 10))
    ? false
    : parseInt(input1, 10) > 0
    ? true
    : false;
  const number2 = isNaN(parseInt(input2, 10))
    ? false
    : parseInt(input2, 10) > 0
    ? true
    : false;

  if (number1 && number2) {
    return;
  }
  throw new Error(`${data.invalidNumber}`);
};

/**
 * Function validates whether each input value is a valid number or not. If any
 * value is not a number, it returns an error, otherwise it returns nothing.
 * @param {String} input1 - Fisrt string value read from the DOM as entered by
 * the user
 * @param {String} input2 - Second string value read from the DOM as entered by
 * the user
 * @returns {void | Error}
 */
const hasInvalidInputs = (input1, input2) => {
  const isBothEmpty = !((input1.trim().length === 0) && (input2.trim().length=== 0));
  const isValueValid1 = isNaN(parseInt(input1, 10)) ? true : false;
  const isValueValid2 = isNaN(parseInt(input2, 10)) ? true : false;

  if (isValueValid1 && isValueValid2 && isBothEmpty) {
    throw new Error(`${data.invalidInputs}`);
  }
};

html.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    isMissingInput(dividend, divider);
    hasInvalidNumber(dividend, divider);
    html.result.innerText = Math.floor(dividend / divider);
  } catch (error) {
    html.result.innerText = `${error}`;
  }
  hasInvalidInputs(dividend, divider);
});

// Crash the program in case of critical errors
window.addEventListener('error', () => {
  document.body.innerHTML = /*  html  */ `
    ${data.invalidInputs}
    `;
});
