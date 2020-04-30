import { When } from "cucumber";
import clickButton from "../helpers/actions/clickButton";

When(/^I click on the "(.*)" button$/, (button) => {
  clickButton(button);
});
