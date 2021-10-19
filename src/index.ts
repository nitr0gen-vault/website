//@ts-ignore
import "./style.css";
require("./assets/js/full-page-scroll.min.js");

// Font awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHome,
  faUniversalAccess,
  faDoorClosed,
  faUserShield,
  faLifeRing,
  faBolt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase Setup
const app = initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
});
const analytics = getAnalytics(app);

// enable full scroll
declare var fullScroll: any;
new fullScroll({
  mainElement: "main",
  displayDots: true,
  dotsPosition: "left",
  animateTime: 0.7,
  animateFunction: "ease",
});

// Icons
library.add(
  faUserSecret,
  faHome,
  faUniversalAccess,
  faDoorClosed,
  faUserShield,
  faLifeRing,
  faBolt,
  faEnvelope,
  faGithub
);
dom.watch();
