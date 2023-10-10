import { learnMoreUtil } from "../../Utils/constants.js";
import IconBox from "../Common/IconBox.js";
import createButton from "../Common/Button.js";

function createLearnMore() {
  const learnMoreContainer = document.getElementById("learnMore");
  learnMoreContainer.classList.add("learnMoreContainer");

  const learnMore = document.createElement("div");
  learnMore.classList.add("learnMore");

  const learnMoreHeading = document.createElement("div");
  learnMoreHeading.classList.add("learnMoreHeading");
  learnMoreHeading.innerText = learnMoreUtil.heading;
  const learnMoreContent = document.createElement("div");
  learnMoreContent.classList.add("learnMoreContent");
  learnMoreContent.innerText = learnMoreUtil.content;
  const learnMoreButton = createButton({
    width: "6rem",
    fontSize: "13px",
    text: learnMoreUtil.button,
  });
  learnMore.appendChild(learnMoreHeading);
  learnMore.appendChild(learnMoreContent);
  learnMore.appendChild(learnMoreButton);
  learnMoreContainer.appendChild(learnMore);

  const learnMoreBox = document.createElement("div");
  learnMoreBox.classList.add("learnMoreBox");
  learnMoreUtil.options.map((box) => {
    return learnMoreBox.appendChild(
      IconBox({
        icon: box.icon,
        heading: box.heading,
        content: box.content,
        color: "white",
        contentColor: "white",
      })
    );
  });
  learnMoreContainer.appendChild(learnMoreBox);
}

export default createLearnMore;
