import { home, contact } from "../../pages/index";

/**
 * @param {String} Url A url where the test will be executed
 */
export default (url) => {
  switch (url) {
    case "home":
      browser.url(home.url());
      break;
    case "contact us":
      browser.url(contact.url());
      break;
    default:
      console.log(`Invalid Page ${url}`);
  }
};
