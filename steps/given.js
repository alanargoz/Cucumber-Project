import { Given } from "cucumber";
import goToPage from "../helpers/actions/goToPage";

Given(/^the browser is at the "(.*)" page$/, (page) => {
  goToPage(page);
});
