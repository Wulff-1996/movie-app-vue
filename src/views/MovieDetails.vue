<template>
  <v-container>
    <v-row>
      <v-col :cols="4">
        <img
            :src="`${$apiService.getPosterPath(movie.poster_path)}`"
            class="cover"
        />
      </v-col>

      <v-col :cols="8">
        <h1>{{ movie.title }}</h1>
        <div class="movie-info">
          <span>{{ movie.release_date }}</span>
          <div class="separator">·</div>
          <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
          <div class="separator">·</div>
          <span>{{ movie.runtime }} min.</span>
        </div>

        <div class="mt-5">
          <h3>Overview</h3>
          <p>{{ movie.overview }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="12">
        <section>
          <h3>Similar Movies</h3>
          <vue-horizontal class="horizontal">
            <div class="item" v-for="item in similarMovies" :key="item.id">
              <movie :movie="item" @onMovieClicked="handleMovieSelected"/>
            </div>
          </vue-horizontal>
        </section>

        <section class="mt-5">
          <h3>Cast</h3>
          <vue-horizontal class="horizontal">
            <div class="item" v-for="item in cast" :key="item.id">
              <person :person="item" @onPersonClicked="handlePersonSelected"/>
            </div>
          </vue-horizontal>
        </section>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import Movie from "@/components/Movie";
import Person from "@/components/Person";

export default {
  name: "MovieDetails",
  components: {
    Movie,
    Person,
    VueHorizontal
  },
  data() {
    return {
      id: this.$route.query.id,
      movie: Object,
      cast: [],
      crew: [],
      similarMovies: []
    }
  },
  methods: {
    handleMovieSelected(movie) {
      this.id = movie.id;
      this.fetchMovieDetails();
      this.fetchMovieCredits();
      this.fetchSimilarMovies();
    },
    handlePersonSelected(person) {
      console.log(person)
    },
    fetchMovieDetails() {
      this.$apiService
          .get("movie/" + this.id)
          .then(res => {
            this.movie = res.data;
          });
    },
    fetchMovieCredits() {
      this.$apiService
          .get("movie/" + this.id + "/credits")
          .then(res => {
            this.cast = res.data.cast;
            this.crew = res.data.crew;
          });
    },
    fetchSimilarMovies() {
      this.$apiService
          .get("movie/" + this.id + "/similar")
          .then(res => {
            this.similarMovies = res.data.results;
          });
    }
  },
  created() {
    this.fetchMovieDetails();
    this.fetchMovieCredits();
    this.fetchSimilarMovies();
  }
}
</script>

<style scoped>

.cover {
  object-fit: contain;
  border-radius: 6px;
  width: 100%;
  height: auto;
}

.movie-info {
  display: flex;
  flex-direction: row;
  text-align: left;

}

.movie-info > * {
  margin-right: 6px;
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