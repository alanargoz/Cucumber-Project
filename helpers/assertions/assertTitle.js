/**
 * @param {string} title Expected title from website
 */
export default (title) => {
  expect(browser.getTitle()).to.equal(title);
};
