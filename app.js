const search = document.querySelector(`.search`);

async function getGiphy() {
  try {
    const giphy = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=uUyaXBmckTdojdKxaYxZ4I26C90iKubX&q=${search.value}&limit=50&offset=0&rating=pg&lang=en`
    );

    const newGIF = document.createElement(`img`);

    newGIF.src = `${
      giphy.data.data[Math.floor(Math.random() * 50)].images.original.url
    }`;

    document.querySelector(`.gifs`).append(newGIF);
  } catch (error) {
    alert(`Invalid search item.`);
  }

  search.value = ``;
}

addEventListener(`submit`, (event) => {
  event.preventDefault();
  getGiphy();
});

document.querySelector(`.remove`).addEventListener(`click`, () => {
  document.querySelector(`.gifs`).innerHTML = ``;
});
