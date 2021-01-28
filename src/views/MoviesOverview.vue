<template>
  <v-container>
    <search-bar @onSearch="handleSearch"/>

    <h3>Popular</h3>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in popular.movies" :key="item.id">
        <movie :movie="item" @onMovieClicked="handleMovieSelected"/>
      </div>
    </vue-horizontal>

    <h3>Now Playing</h3>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in nowPlaying.movies" :key="item.id">
        <movie :movie="item" @onMovieClicked="handleMovieSelected"/>
      </div>
    </vue-horizontal>

    <h3>Upcoming</h3>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in upcoming.movies" :key="item.id">
        <movie :movie="item" @onMovieClicked="handleMovieSelected"/>
      </div>
    </vue-horizontal>

    <h3>Top Rated</h3>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in topRated.movies" :key="item.id">
        <movie :movie="item" @onMovieClicked="handleMovieSelected"/>
      </div>
    </vue-horizontal>
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import VueHorizontal from 'vue-horizontal';
import Movie from "@/components/Movie";

export default {
  name: "MoviesOverview",
  components: {
    Movie,
    SearchBar,
    VueHorizontal
  },
  data() {
    return {
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
    handleSearch(search){
      this.$router.push({ name: "MovieSearch", query: { search: search } });
    },
    handleMovieSelected(movie){
      this.$router.push({ name: "MovieDetails", query: { id: movie.id } });
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
    this.fetchPopular();
    this.fetchNowPlaying();
    this.fetchUpcoming();
    this.fetchTopRated();
  }
};
</script>

<style scoped lang="scss">
.movieOverview {
}

.horizontal {
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}
</style>