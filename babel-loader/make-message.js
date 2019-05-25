export const makeMessage = msg => {
  const element = document.createElement("h5");
  element.textContent = msg;
  return element;
};
