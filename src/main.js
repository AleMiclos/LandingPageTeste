import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUser,
  faBars,
  faCartShopping,
  faTicket,
  faClover,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

library.add(
  faUser,
  faBars,
  faCartShopping,
  faTicket,
  faClover,
  faHourglassStart,
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
