import ButtonComponent from "./components/ButtonComponent.js";
import ParagraphComponent from "./components/ParagraphComponent.js";
import InputComponent from "./components/InputComponent.js";
import ImageComponent from "./components/ImageComponent.js";

const mainDiv = document.querySelector("div");

const input1 = new InputComponent(mainDiv);
const paragraph1 = new ParagraphComponent(mainDiv, "aqui saldra el texto");
const sendButton = new ButtonComponent(mainDiv, "Send", () => {
  paragraph1.textContent = input1.value;
});
console.log(input1);
console.log(paragraph1);
