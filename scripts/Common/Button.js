function createButton(options) {
  const button = document.createElement("div");
  button.classList.add("button");
  button.style.backgroundColor = options.backgroundColor
    ? options.backgroundColor
    : "#E93A7D";
  button.style.width = options.width;
  button.style.color = options.color ? options.color : "white";
  button.style.padding = options.padding ? options.padding : "10px";
  button.style.fontSize = options.fontSize ? options.fontSize : "inherit";
  button.style.border = options.border ? options.border : "0";
  button.style.fontWeight = options.fontWeight && options.fontWeight;
  button.style.position = options.position && options.position;
  button.style.bottom = options.bottom && options.bottom;
  button.style.right = options.right && options.right;
  button.innerText = options.text;
  return button;
}

export default createButton;
