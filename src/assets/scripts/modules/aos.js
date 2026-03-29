import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  setTimeout(() => {
    AOS.init({
      duration: 550,
      easing: 'ease-out',
      once: false,
      offset: 60,
    });
  }, 500) // Para intentar solucionar el problema de AOS y Lenis al mismo tiempo

  window.addEventListener('load', () => AOS.refresh());
  window.addEventListener('resize', () => AOS.refresh());
}
