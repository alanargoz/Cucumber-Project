/**
 * @param {object} element WebdriverIO element which should be existing in DOM
 */
export default (element) => {
  try {
    setTimeout(() => {
      element.isExisting();
    }, 1000);
  } catch (e) {
    console.log(
      `The element ${element} does not exist, verify your selector or the element`
    );
  }
};
