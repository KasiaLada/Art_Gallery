const searchArt = document.querySelector("#searchArt");
const myButton = document.querySelector("#btn");
const btnImage = document.querySelector("#btn-image");
const input = document.querySelector("input");

const API_LINK = "https://api.artic.edu/api/v1/artworks";
const API_IMAGE_START = "https://www.artic.edu/iiif/2/";
const API_IMAGE_END = "/full/843,/0/default.jpg";

const getSearchArt = () => {
  fetch(API_LINK)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);

      const getItemImage = (argument) => {
        const API_IMAGE = API_IMAGE_START + argument + API_IMAGE_END;
        console.log(API_IMAGE);
        return API_IMAGE;
      };

      data.data.forEach((art) => {
        const markup = `<li>${art.artist_title}</li>`;
        const image = `<img src=${art.image_id}></img>`;

        const newImageSrc = getItemImage(art.image_id);
        const img_element = document.createElement("img");
        img_element.src = newImageSrc;
        img_element.style = "max-width: 200px;";

        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        document.querySelector("ul").appendChild(img_element);
      });
    })

    .catch((err) => console.error(err));
};

const getItemImage = (id) => {
  const API_IMAGE = API_IMAGE_START + id + API_IMAGE_END;
  console.log(API_IMAGE);
  return API_IMAGE;
};

const callMe = () => {
  console.log("clicked");
  getSearchArt();
};

myButton.addEventListener("click", callMe);
