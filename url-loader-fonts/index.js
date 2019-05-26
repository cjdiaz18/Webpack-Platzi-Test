import "./estilos.css";
// import { firstMessage, delayedMessage } from "./message.js";
import { firstMessage, delayMessage } from "./message.js";
import platziImg from "./platzi.png";

document.write("<h1>" + firstMessage + "</h1>");
delayMessage();

const img = document.createElement("img");
img.setAttribute("src", platziImg);
img.setAttribute("width", 50);
img.setAttribute("heigh", 50);

document.body.append(img);

// delayedMessage();
//console.log("Hola mundo!, desde Webpack");

console.log("Hola mundo!, desde Webpack en un webpack.config");
