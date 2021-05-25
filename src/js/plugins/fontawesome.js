import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

Vue.component('font-awesome-icon', FontAwesomeIcon);

import {
  faBolt,
  faTachometerAlt,
  faLaptop,
  faMobileAlt,
  faRocket,
  faLaptopCode,
  faGlobeAmericas,
  faHandsHelping,
  faTools,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import {
  faLightbulb,
  faLaughBeam,
  faPaperPlane,
  faFileCode,
  faStickyNote,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons';

import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faBolt,
  faTachometerAlt,
  faLaptop,
  faMobileAlt,
  faLightbulb,
  faLaughBeam,
  faPaperPlane,
  faRocket,
  faFileCode,
  faLaptopCode,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faStickyNote,
  faGlobeAmericas,
  faHandsHelping,
  faCode,
  faEyeSlash,
  faTools,
);
