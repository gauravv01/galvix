import { footerUtil } from "../../Utils/constants.js";

function createFeature(options) {
  const footerFeature = document.createElement("div");
  footerFeature.classList.add("footerFeature");

  const footerFeatureHeading = document.createElement("div");
  footerFeatureHeading.classList.add("footerFeatureHeading");
  footerFeatureHeading.innerText = options.heading;

  const footerFeatureOptions = document.createElement("div");
  footerFeatureOptions.classList.add("footerFeatureOptions");
  options.map((option) => {
    const span = document.createElement("span");
    span.style.cursor = "pointer";
    span.innerText = options.option;
    return footerFeatureOptions.appendChild(span);
  });

  footerFeature.appendChild(footerFeatureHeading);
  footerFeature.appendChild(footerFeatureOptions);
}

function createFooter() {
  const footer = document.getElementById("footer");
  footer.classList.add("footer");

  const footerMain = document.createElement("div");
  footerMain.classList.add("footerMain");

  const footerMainHeading = document.createElement("div");
  footerMainHeading.classList.add("footerMainHeading");
  footerMainHeading.innerText = footerUtil.heading;
  const footerMainContemt = document.createElement("div");
  footerMainContemt.classList.add("footerMainContemt");
  footerMainContemt.innerText = footerUtil.content;
  const footerMainIcons = document.createElement("div");
  footerMainIcons.classList.add("footerMainIcons");
  footerUtil.icons.map((icon) => {
    const image = document.createElement("img");
    image.src = icon;
    image.alt = "";
    image.style.width = "13px";
    image.style.height = "13px";
    image.style.cursor = "pointer";
    return footerMainIcons.appendChild(image);
  });
  footerMain.appendChild(footerMainHeading);
  footerMain.appendChild(footerMainContemt);
  footerMain.appendChild(footerMainIcons);
  footer.appendChild(footerMain);

  const footerFeature = document.createElement("div");
  footerFeature.classList.add("footerFeature");
  footerUtil.options.map((option) => {
    return footerFeature.appendChild(
      createFeature({ heading: option.heading, option: option.features })
    );
  });
  footer.appendChild(footerFeature);
}

export default createFooter;
