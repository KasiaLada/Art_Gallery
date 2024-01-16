const searchArt = document.querySelector('#searchArt');
const btn = document.querySelector('#btn');
const btnImage = document.querySelector('#btn-image');
const input = document.querySelector('input');

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
			console.log(data);

			// const getItemImage = (id) => {
			// 		const API_IMAGE = API_IMAGE_START + id + API_IMAGE_END;
			// 		console.log(API_IMAGE);
			// 		return API_IMAGE;
			// 	};

			// data.forEach((art) => {
			// 	const markup = `<li>${art.artist_title}</li>`;
			// 	document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
			// });
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

// function newText() {
// 	const newLi = document.createElement('li');

// 	const newTextItem = document.createTextNode('Pictures');
// 	newLi.appendChild(newTextItem);

// 	document.getElementById('#art-list').appendChild(newLi);
// }
// function getData() {
// //Example data from API response
// const data = [
// { image_id: "763257c8-fbf9-0377-54ab-ae3cee7ff7a4", title: "Ornamental Panel With Two Lovers" },
// { image_id: "d0979087-dc1b-f259-a23f-169cdced27ee", title: "The Madonna of the Rosary" },
// { image_id: "f2a2c17c-8eee-a1b8-cfe4-71bb59f3798e", title: "Seated Boy" }
// ];

// data.map((item) => {
// const art_list_item = document.createElement("li");
// const art_node = document.createTextNode(item.title);
// const img_element = document.createElement("img");
// img_element.src = `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`;

// art_list_item.appendChild(art_node);
// art_list_item.appendChild(img_element);
// document.getElementById("artList").appendChild(art_list_item);
// });
// }

// function getData() {
// 	//Example data from API response
// 	const data = [
// 	{ image_id: "763257c8-fbf9-0377-54ab-ae3cee7ff7a4", title: "Ornamental Panel With Two Lovers" },
// 	{ image_id: "d0979087-dc1b-f259-a23f-169cdced27ee", title: "The Madonna of the Rosary" },
// 	{ image_id: "f2a2c17c-8eee-a1b8-cfe4-71bb59f3798e", title: "Seated Boy" }
// 	];

// 	data.map((item) => {
// 	const art_list_item = document.createElement("li");
// 	const art_node = document.createTextNode(item.title);
// 	const img_element = document.createElement("img");
// 	img_element.src = `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`;

// 	art_list_item.appendChild(art_node);
// 	art_list_item.appendChild(img_element);
// 	document.getElementById("artList").appendChild(art_list_item);
// 	});
// 	}

btn.addEventListener('click', getSearchArt);
// btnImage.addEventListener('click', getItemImage(newLi));


