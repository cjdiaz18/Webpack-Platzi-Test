import { renderToDOM } from "./render-to-dom.js";
import { makeMessage } from "./make-message.js";

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk("OMG | Han Pasado 5 Segundos | OMG");
  }, 5000);
});

export const firstMessage = "Hola Mundo! from Modulo";
export const delayMessage = async () => {
  const message = await waitTime;
  console.log(message);
  // const element = document.createElement("h5");
  // element.textContent = message;
  renderToDOM(makeMessage(message));
};

// module.exports = {
//   firstMessage: "Hola mundo desde un modulo<br>",
//   delayedMessage: async () => {
//     const message = await waitTime;
//     console.log(message);
//     // Agregando elemento para el DOM en HTML
//     const element = document.createElement("p");
//     element.textContent = message;
//     renderToDOM(element);
//   }
// };
