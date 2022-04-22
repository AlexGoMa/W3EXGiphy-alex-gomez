const form = document.querySelector(".search-form");
const search = form.querySelector(".search");
const image = document.querySelector(".gif");

const apiKey = "WYIAfuoRAtrjXjlrl50GaSGxZWlAQdiy&";

const getRandomGif = async (tag) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`
    );
    const randomGifData = await response.json();
    return randomGifData;
};
/*
(async () => {
    console.log(await getRandomGif("gatitos"));
})();
*/
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = search.value;
    const gifData = await getRandomGif(text);
    const gifUrl = gifData.data.images.original.url;
    image.src = gifUrl;

    console.log(gifUrl);
});
