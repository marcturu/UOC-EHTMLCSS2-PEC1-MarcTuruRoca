import { lenis } from './lenis.js';

export function initHeader() {
  const header = document.querySelector('.header')
  const menuBtn = document.querySelector('.header__menu-btn')
  const mobileNav = document.querySelector('.header__mobile-nav')
  const mobileLinks = document.querySelectorAll('.header__mobile-link')
  const logo = document.querySelector('.header__logo')

  const getScrollOpacity = () => Math.min(window.scrollY / 1000, 1)

  const updateHeaderOpacity = () => {
    const isMenuOpen = mobileNav.classList.contains('header__mobile-nav--open')
    if (isMenuOpen) return // Si el menu está abierto, no se cambia la opacidad (tiene que ser 1)
    header.style.setProperty('--header-opacity', getScrollOpacity())
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeaderOpacity();
        ticking = false;
      })
      ticking = true;
    }
  })

  /* Hamburguesa: abrir/cerrar menú mobile */
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('header__mobile-nav--open')
    menuBtn.setAttribute('aria-expanded', isOpen)
    menuBtn.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'

    if (isOpen) {
      header.style.setProperty('--header-opacity', 1)
    } else {
      updateHeaderOpacity()
    }
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
        if (section) lenis.scrollTo(section, { offset: -80 })
      }, 100)
    })
  })

  /* Cerrar menú (en mobile) al hacer click en el logo */
  logo.addEventListener('click', () => {

    mobileNav.classList.remove('header__mobile-nav--open')
    menuBtn.setAttribute('aria-expanded', false)
    menuBtn.querySelector('i').className = 'fa-solid fa-bars'
    updateHeaderOpacity()
  })
}


