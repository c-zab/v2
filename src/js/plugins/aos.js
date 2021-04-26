import AOS from 'aos';
import 'aos/dist/aos.js';

$(function () {
  AOS.init({
    duration: 700,
    once: true,
    disable: 'mobile',
  });
});
