<template>
  <div class="card" @click="$emit('onPersonClicked', person)">
    <img
        :src="`${$apiService.getProfilePicturePath(person.profile_path)}`"
        class="image"
    />
    <div class="content">
      <h3 class="ellipse">{{person.character}}</h3>
      <p class="ellipse">{{ person.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
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

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
}

.ellipse {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>