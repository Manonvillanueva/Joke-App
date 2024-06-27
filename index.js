const header = document.getElementById("header");
const content = document.getElementById("content");

const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      // => Pour être plus lisible on pourrait créer une variable pour remplacer data.data.content
      header.textContent = data.data.content.text_head;
      content.textContent =
        data.data.content.text !== ""
          ? data.data.content.text
          : data.data.content.text_hidden;
    });
};

getJoke();

document.body.addEventListener("click", getJoke);
