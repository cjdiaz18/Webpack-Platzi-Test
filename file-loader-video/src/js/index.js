import "../css/estilos.css";
// import { firstMessage, delayedMessage } from "./message.js";
import { firstMessage, delayMessage } from "./message.js";
import platziImg from "../images/platzi.png";
import videoPlatzi from "../video/que-es-core.mp4";

document.write("<h1>" + firstMessage + "</h1>");
delayMessage();

// Image en HTML
const img = document.createElement("img");
img.setAttribute("src", platziImg);
img.setAttribute("width", 50);
img.setAttribute("heigh", 50);

document.body.append(img);

// Video en HTML
const video = document.createElement("video");
video.setAttribute("src", videoPlatzi);
video.setAttribute("width", 480);
video.setAttribute("autoplay", true);
video.setAttribute("controls", true);
document.body.append(video);

// delayedMessage();
//console.log("Hola mundo!, desde Webpack");

console.log("Hola mundo!, desde Webpack en un webpack.config");
