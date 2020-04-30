import { home, contact } from "../../pages/index";
/**
 * @param {object} button WebdriverIO element to be clicked
 */

export default (button) => {
  switch (button) {
    case "contact us":
      home.contactUsButton().click();
      break;
    case "send":
      contact.sendButton().click();
      break;
    default:
      return `The buttong ${button} doest not exist or is not clickable`;
  }
};
