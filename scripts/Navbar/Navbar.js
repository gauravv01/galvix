import { navbarUtil } from "../../Utils/constants.js";

function createNavbar() {
  const navbarContainer = document.getElementById("navbar");
  navbarContainer.classList.add("navbarContainer");

  const navbarHeading = document.createElement("div");
  navbarHeading.classList.add("navbarHeading");
  navbarHeading.innerText = navbarUtil.heading;

  const navbarOptions = document.createElement("div");
  navbarOptions.classList.add("navbarOptions");

  navbarUtil.options.map((option, index) => {
    const optionItem = document.createElement("div");
    optionItem.style.cursor = "pointer";
    optionItem.innerText = option;
    return navbarOptions.appendChild(optionItem);
  });
  navbarContainer.appendChild(navbarHeading);
  navbarContainer.appendChild(navbarOptions);
}

export default createNavbar;
