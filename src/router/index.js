import Vue from "vue";
import VueRouter from "vue-router";
import MoviesOverview from "../views/MoviesOverview.vue";
import SeriesOverview from "@/views/SeriesOverview";
import PeopleOverview from "@/views/PeopleOverview";
import MovieDetails from "@/views/MovieDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/movies",
    name: "MoviesOverview",
    component: MoviesOverview
  },
  {
    path: "/series",
    name: "SeriesOverview",
    component: SeriesOverview
  },
  {
    path: "/people",
    name: "PeopleOverview",
    component: PeopleOverview
  },
  {
    path: "/movie",
    name: "MovieDetails",
    component: MovieDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
