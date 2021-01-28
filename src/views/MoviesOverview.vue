<template>
  <v-container>
    <div>Movies overview</div>
    <search-bar/>

    <v-container>
      <h3>Popular</h3>
    </v-container>

    <v-container>
      <h3>Now Playing</h3>
    </v-container>

    <v-container>
      <h3>Upcoming</h3>
    </v-container>

    <v-container>
      <h3>Top Rated</h3>
    </v-container>
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "MoviesOverview",
  components: {
    SearchBar
  },
  data() {
    return {
      latest: {
        page: 0,
        movies: []
      },
      popular: {
        page: 0,
        movies: []
      },
      nowPlaying: {
        page: 0,
        movies: []
      },
      upcoming: {
        page: 0,
        movies: []
      },
      topRated: {
        page: 0,
        movies: []
      }
    };
  },
  methods: {
    fetchLatest() {
      this.$apiService.get("movie/latest").then(res => {
        this.latest.page = res.data.page;
        this.latest.movies = res.data.results;
      });
    },
    fetchPopular() {
      this.$apiService.get("movie/popular").then(res => {
        this.popular.page = res.data.page;
        this.popular.movies = res.data.results;
      });
    },
    fetchNowPlaying() {
      this.$apiService.get("movie/now_playing").then(res => {
        this.nowPlaying.page = res.data.page;
        this.nowPlaying.movies = res.data.results;
      });
    },
    fetchUpcoming() {
      this.$apiService.get("movie/upcoming").then(res => {
        this.upcoming.page = res.data.page;
        this.upcoming.movies = res.data.results;
      });
    },
    fetchTopRated() {
      this.$apiService.get("movie/top_rated").then(res => {
        this.topRated.page = res.data.page;
        this.topRated.movies = res.data.results;
      });
    }
  },
  created() {
    this.fetchLatest();
    this.fetchPopular();
    this.fetchNowPlaying();
    this.fetchUpcoming();
    this.fetchTopRated();
  }
};
</script>
