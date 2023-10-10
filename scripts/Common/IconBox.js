function IconBox(options) {
  const iconBoxContainer = document.createElement("div");
  iconBoxContainer.classList.add("iconBoxContainer");

  const iconBoxImageContainer = document.createElement("div");
  const iconBoxImage = document.createElement("img");
  iconBoxImage.src = options.icon;
  iconBoxImage.alt = "";
  iconBoxImage.classList.add("iconBoxImage");
  iconBoxImageContainer.appendChild(iconBoxImage);
  iconBoxContainer.appendChild(iconBoxImageContainer);

  const iconBoxContentContainer = document.createElement("div");
  iconBoxContentContainer.classList.add("iconBoxContentContainer");

  const iconBoxheading = document.createElement("div");
  const iconBoxContent = document.createElement("div");

  iconBoxheading.style.color = options.color ? options.color : "#1E0E62";
  iconBoxheading.style.fontWeight = "600";
  iconBoxheading.innerText = options.heading;

  iconBoxContent.style.color = options.contentColor
    ? options.contentColor
    : "#9E9EAD";
  iconBoxContent.style.fontWeight = "400";
  iconBoxContent.style.fontStyle = "12px";
  iconBoxContent.innerText = options.content;

  iconBoxContentContainer.appendChild(iconBoxheading);
  iconBoxContentContainer.appendChild(iconBoxContent);

  iconBoxContainer.appendChild(iconBoxContentContainer);

  return iconBoxContainer;
}

export default IconBox;
