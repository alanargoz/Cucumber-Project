import { Then } from "cucumber";
import assertTitle from "../helpers/assertions/assertTitle";
import verifyElement from "../helpers/assertions/verifyElement";
import { contact } from "../pages/index";
import assertErrorMessage from "../helpers/assertions/assetErrorMessage";

Then(/^I verify page title which should be "(.*)"$/, (title) => {
  assertTitle(title);
});

Then(/^I verify the "(.*)" button exist$/, (button) => {
  verifyElement(button);
});

Then(
  /^I fill "(.*)", "(.*)", "(.*)" and "(.*)"$/,
  (subject, email, order, message) => {
    contact.fillContactUs(subject, email, order, message);
  }
);

Then(/^I verify if the error message "(.*)" is what I expected$/, (error) => {
  assertErrorMessage(error);
});
