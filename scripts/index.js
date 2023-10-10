import createNavbar from "./Navbar/Navbar.js";
import createMain from "./Main/Main.js";
import createLearnMore from "./LearnMore/LearnMore.js";
import createContact from "./Contact/Contact.js";
import createFooter from "./Footer/Footer.js";

document.addEventListener("DOMContentLoaded", function () {
  createNavbar();
  createMain();
  createLearnMore();
  createFooter();
  createContact();
});
