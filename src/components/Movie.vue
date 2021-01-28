<template>
  <div class="card" @click="$emit('onMovieClicked', movie)">
    <img
        :src="`${$apiService.getPosterPath(movie.poster_path)}`"
        class="image"
    />
    <div class="content">
      <div class="rating">{{ movie.vote_average }}</div>
      <p class="movie-title">{{ movie.title }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
card {
  margin: 10px;
  max-width: 200px;
}

.image {
  height: 300px;
  width: 200px;
  background-color: #262D3D;
  border: none;
  border-radius: 10px;

  &:hover {
    border: 3px solid cadetblue;
  }
}

.rating {
  top: -30px;
  padding: 12px;
  left: 10px;
  height: 50px;
  width: 50px;
  text-align: center;
  border: none;
  position: absolute;
  background-color: #262D3D;
  color: #EAEBEE;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
}

.movie-title {
  margin: 15px 10px 0 10px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>