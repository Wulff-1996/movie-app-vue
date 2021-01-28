<template>
  <v-row>
    <v-col :cols="11">
      <v-text-field v-model="mSearch"></v-text-field>
    </v-col>
    <v-col :cols="1">
      <v-btn @click="$emit('onSearch', mSearch)">Search</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchBar",
  data(){
    return {
      mSearch: this.search
    }
  },
  props: {
    search: {
      type: String,
      default: ""
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>