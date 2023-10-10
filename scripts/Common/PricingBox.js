import greenTick from "../../Utils/icons/greenTick.jpg";
import { pricingUtil } from "../Utils/constants.js";
import createButton from "./Button.js";

function createFeatureLine(line) {
  const featureLine = document.document.createElement("div");
  featureLine.classList.add("feature-line");
  const greenTickImage = document.createElement("img");
  greenTickImage.src = greenTick;
  greenTickImage.alt = "";
  greenTickImage.style.width = "20px";
  greenTickImage.style.height = "15px";
  featureLine.appendChild(greenTickImage);

  const featureLineText = document.document.createElement("div");
  featureLineText.style.color = "#9E9EAD";
  featureLineText.style.fontSize = "12px";
  featureLineText.innerText = line;

  return featureLine;
}

let isHovered = false;
const hoverStart = () => {
  isHovered = true;
};

const hoverEnd = () => {
  isHovered = false;
};

function createPricingBox({ heading, price, peruser, content, perMonth }) {
  const pricingBox = document.document.createElement("div");
  pricingBox.classList.add("pricing-box");
  pricingBox.addEventListener("onmouseenter", hoverStart);
  pricingBox.addEventListener("onmouseleave", hoverEnd);

  const priceContainer = document.document.createElement("div");
  priceContainer.classList.add("price-container");

  const priceContainerHeading = document.document.createElement("div");
  priceContainerHeading.style.fontWeight = "500";
  priceContainerHeading.innerText = heading;

  const priceContainerContent = document.document.createElement("div");
  priceContainerContent.classList.add("priceContainerContent");

  const priceSymobol = document.document.createElement("div");
  priceSymobol.classList.add(" priceSymobol");
  priceSymobol.innerText = "$";

  const priceValue = document.createElement("div");
  priceValue.style.fontSize = "36px";
  priceValue.style.fontWeight = "600";
  priceValue.innerText = price;

  const priceContentPerUser = document.createElement("div");
  priceContentPerUser.classList.add("priceContentPerUser");

  priceContentPerUser.appendChild(
    (document.createElement("div").innerText = peruser)
  );
  priceContentPerUser.appendChild(
    (document.createElement("div").innerText = perMonth)
  );

  priceContainerContent.appendChild(priceSymobol);
  priceContainerContent.appendChild(priceValue);
  priceContainerContent.appendChild(priceContentPerUser);

  const priceContainerContentContent = document.createElement("div");
  priceContainerContentContent.classList.add("priceContainerContentContent");
  priceContainerContentContent.innerText = content;

  priceContainer.appendChild(priceContainerHeading);
  priceContainer.appendChild(priceContainerContent);
  priceContainer.appendChild(priceContainerContentContent);

  const priceFeatureBox = document.createElement("div");
  priceFeatureBox.classList.add("priceFeatureBox");
  pricingUtil.box.features.map((line) =>
    priceFeatureBox.appendChild(createFeatureLine(line))
  );

  const pricingButton = createButton({
    text: pricingUtil.box.button,
    backgroundColor: isHovered ? "#E93A7D" : "white",
    border: !isHovered && "1px solid #9E9EAD",
    width: "8rem",
    color: isHovered ? "white" : "#1E0E62",
    fontSize: "12px",
    fontWeight: "600",
  });

  pricingBox.appendChild(priceContainer);
  pricingBox.appendChild(priceFeatureBox);
  pricingBox.appendChild(pricingButton);

  return pricingBox;
}
export default createPricingBox;
