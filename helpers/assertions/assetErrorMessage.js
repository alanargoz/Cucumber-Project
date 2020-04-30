import { contact } from "../../pages/index";

/**
 * @param {string} expectedError expected error text from element
 */
export default (expectedError) => {
  expect(contact.errorMessage().getText()).to.equal(expectedError);
};
