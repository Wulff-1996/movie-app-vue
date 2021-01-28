<template>
  <v-container>
    <search-bar
        :search="search"
        @onSearch="searchMovies"
    />

    <v-row>
      <v-col
          v-for="movie in movies"
          :key="movie.id"
          :cols="12"
          :sm="4"
          :md="3"
          :lg="2"
      >
        <movie :movie="movie" @click="onMovieClicked(movie)" />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Movie from "@/components/Movie";
export default {
  name: "MovieSearch",
  components: {
    SearchBar,
    Movie
  },
  data(){
    return {
      search: this.$route.query.search,
      movies: [],
      page: 0
    }
  },
  methods: {
    searchMovies(){
      this.$apiService.get("search/movie", { query: this.search }).then(res => {
        this.page = res.data.page;
        this.movies = res.data.results;
      })
    },
    onMovieClicked(movie){
      this.$router.push({ name: "MovieDetails", query: { id: movie.id } });
    }
  },
  created() {
    this.searchMovies();
  }
}
</script>

<style scoped>

</style>