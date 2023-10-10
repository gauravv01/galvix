import IconBox from "../Common/IconBox.js";
import { mainUtil } from "../../Utils/constants.js";
import createButton from "../Common/Button.js";
// import Tag from "./common/Tag";

function createMain() {
  const container = document.getElementById("main");
  container.classList.add("container");

  // sample-content
  const sampleContentContainer = document.createElement("div");
  sampleContentContainer.classList.add("sampleContentContainer");

  const sampleContentHeading = document.createElement("div");
  sampleContentHeading.classList.add("sampleContentHeading");
  sampleContentHeading.innerText = mainUtil.heading;
  const sampleContent = document.createElement("div");
  sampleContent.classList.add("sampleContent");
  sampleContent.innerText = mainUtil.content;
  const sampleContentButton = createButton({
    width: "10rem",
    text: mainUtil.exploreButton,
  });
  sampleContentContainer.appendChild(sampleContentHeading);
  sampleContentContainer.appendChild(sampleContent);
  sampleContentContainer.appendChild(sampleContentButton);
  container.appendChild(sampleContentContainer);

  // free-fall

  // action-items
  const actionItemContainer = document.createElement("div");
  actionItemContainer.classList.add("actionItemContainer");

  const actionItemLeft = document.createElement("div");
  actionItemLeft.classList.add("actionItemLeft");
  Object.values(mainUtil.actionItems.left).map((box) => {
    return actionItemLeft.appendChild(
      IconBox({ icon: box.icon, heading: box.heading, content: box.content })
    );
  });
  actionItemContainer.appendChild(actionItemLeft);

  const actionItemRight = document.createElement("div");
  actionItemRight.classList.add("actionItemRight");

  const actionItemRightHeading = document.createElement("div");
  actionItemRightHeading.classList.add("actionItemRightHeading");
  actionItemRightHeading.innerText = mainUtil.actionItems.right.heading;
  const actionItemRightContent = document.createElement("div");
  actionItemRightContent.classList.add("actionItemRightContent");
  actionItemRightContent.innerText = mainUtil.actionItems.right.content;
  const actionItemRightIcons = document.createElement("div");
  actionItemRightIcons.classList.add("actionItemRightIcons");

  actionItemRightIcons.appendChild(
    createButton({ width: "8rem", text: mainUtil.actionItems.right.button })
  );
  mainUtil.actionItems.right.icons.map((icon, index) => {
    const image = document.createElement("img");
    image.src = icon;
    image.alt = "";
    image.style.width = "30px";
    image.style.height = "30px";
    image.style.cursor = "pointer";
    return actionItemRightIcons.appendChild(image);
  });
  actionItemRight.appendChild(actionItemRightHeading);
  actionItemRight.appendChild(actionItemRightContent);
  actionItemRight.appendChild(actionItemRightIcons);
  actionItemContainer.appendChild(actionItemRight);

  container.appendChild(actionItemContainer);
}

export default createMain;
