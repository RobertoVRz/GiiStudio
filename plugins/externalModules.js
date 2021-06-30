import Vue from "vue";
import VueSmoothScroll from "vue2-smooth-scroll";
import VueMasonry from "vue-masonry-css";
import VideoBackground from "vue-responsive-video-background-player";

Vue.component("video-background", VideoBackground);
Vue.use(VueMasonry);
Vue.use(VueSmoothScroll);
