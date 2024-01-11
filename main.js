const searchArt = document.querySelector('#searchArt');
const btn = document.querySelector('#btn');
const btnImage = document.querySelector('#btn-image');
const input = document.querySelector('input')


const API_LINK = 'https://api.artic.edu/api/v1/artworks';
const API_IMAGE_START = 'https://www.artic.edu/iiif/2/';
const API_IMAGE_END = '/full/843,/0/default.jpg';

// fetch(API_LINK)
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// const artImg = document.createElement('img');

const getSearchArt = () => {
	fetch(API_LINK)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((art) => {
				const markup = `<li>${art.artist_title}</li>`;
				document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
			});
		})
		// const presentedImages = res.data.map
		// document.body
		// 	.appendChild(img)

		.catch((err) => console.error(err));
};

const getItemImage = (id) => {
	const API_IMAGE = API_IMAGE_START + id + API_IMAGE_END;
	console.log(API_IMAGE);
	return API_IMAGE;
};

btn.addEventListener('click', getSearchArt);
// btnImage.addEventListener('click', getItemImage(6010));
