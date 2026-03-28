import Lenis from 'lenis';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import L from 'leaflet';

/* ----- Lenis - smooth scroll ----- */
const lenis = new Lenis({
  duration: 0.9,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  anchors: true,
});

function raf(time) {
  lenis.raf(time);
  AOS.refresh();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* ----- AOS - animation on scroll ----- */
setTimeout(() => {
  AOS.init({
    duration: 550,
    easing: 'ease-out',
    once: false,
    offset: 60,
  });
}, 500) // Para intentar solucionar el problema de AOS y Lenis al mismo tiempo


/* ----- Swiper - gallery carousel ----- */
new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      spaceBetween: 24,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 32,
      centeredSlides: true,
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


/* ----- Header ----- */
const header = document.querySelector('.header')
const menuBtn = document.querySelector('.header__menu-btn')
const mobileNav = document.querySelector('.header__mobile-nav')
const mobileLinks = document.querySelectorAll('.header__mobile-link')

/* Poner opacidad de header segun scroll (hasta 1000px) */
const getScrollOpacity = () => {
  const maxScrollY = 1000
  return Math.min(window.scrollY / maxScrollY, 1)
}

const updateHeaderOpacity = () => {
  const isMenuOpen = mobileNav.classList.contains('header__mobile-nav--open')
  if (isMenuOpen) return //Si el menu está abierto, no se cambia la opacidad (tiene que ser 1)
  header.style.setProperty('--header-opacity', getScrollOpacity())
}

window.addEventListener('scroll', updateHeaderOpacity)

/* Hamburguesa: abrir/cerrar menú mobile */
menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('header__mobile-nav--open')
  menuBtn.setAttribute('aria-expanded', isOpen)
  menuBtn.querySelector('i').className = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

  if (isOpen) {
    header.style.setProperty('--header-opacity', 1)
  } else {
    updateHeaderOpacity()
  }

  header.style.paddingBottom = (isOpen && window.innerWidth < 768) ? '0' : '1rem'
})

/* Cerrar menú (en mobile) al hacer click en un link */
mobileLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = link.getAttribute('href')

    mobileNav.classList.remove('header__mobile-nav--open')
    menuBtn.setAttribute('aria-expanded', false)
    menuBtn.querySelector('i').className = 'fa-solid fa-bars'

    setTimeout(() => {
      const section = document.querySelector(target)
      if (section) {
        lenis.scrollTo(section, { offset: -80 })
      }
    }, 100)
  })
})
