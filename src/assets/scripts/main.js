import Lenis from 'lenis';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper.css'
import 'swiper/modules/navigation.css'
import 'swiper/modules/pagination.css'

import L from 'leaflet';

/* ----- Lenis - smooth scroll ----- */
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log(lenis);

/* ----- Swiper - gallery carousel ----- */
new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
});

/* ----- Leaflet - JP filming locations map ----- */
const map = L.map('leaflet-map', {
  center: [22.058806997702067, -159.5261],
  zoom: 10,
  scrollWheelZoom: false,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

const jpLocations = [
  {
    coords: [22.1330, -159.6270],
    title: 'Olokele Valley',
    scene: 'Opening helicopter arrival scene',
  },
  {
    coords: [22.2000, -159.5704],
    title: "Ha'ena Beach",
    scene: 'Isla Nublar coastal scenes',
  },
  {
    coords: [22.0000, -159.3778],
    title: 'Wailua River',
    scene: 'Jungle chase sequences',
  },
  {
    coords: [22.1452, -159.6712],
    title: 'Na Pali Coast',
    scene: 'Aerial flyover shots',
  },
  {
    coords: [22.0634, -159.4206],
    title: 'Center of Kauai',
    scene: 'Jurassic Park gate entrance',
  },
]

const icon = L.divIcon({
  className: 'map-marker',
  html: '<i class="fa-solid fa-dragon"></i>',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

jpLocations.forEach(({ coords, title, scene }) => {
  L.marker(coords, { icon })
    .addTo(map)
    .bindPopup(
      `<div class="map-popup">
        <strong class="map-popup__title">${title}</strong>
        <span class="map-popup__scene">${scene}</span>
      </div>`
    )
})
