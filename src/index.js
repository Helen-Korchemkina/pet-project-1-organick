import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { arrayProd } from './data';

const productsList = document.querySelector(".our-products__list");

const createProductsList = renderProductsList(arrayProd);
productsList.insertAdjacentHTML("beforeend", createProductsList);

function renderProductsList(array) {
    return array
        .map(({ type, photo, name, oldPrice, price }) => {
            console.log(photo);
        return `
<li class="our-products__card">
<div class="our-products__type-box"><p class="our-products__type">${type}</p></div>
<img class="our-products__img" src='${photo}' alt="${name}" />
<h3 class="our-products__name">${name}</h3>
<img src="./image/line.svg" alt="">
<div class="our-products__info"><p class="our-products__old-price">${oldPrice}</p>
<p class="our-products__price">${price}</p>
<img src=".image/stars/.svg" alt="" /></div>
</li>`;
    })
    .join("");
}

