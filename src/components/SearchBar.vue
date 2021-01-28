<template>
  <v-row>
    <v-col :cols="11">
      <v-text-field v-model="search"></v-text-field>
    </v-col>
    <v-col :cols="1">
      <v-btn @click="$emit('onSearch', search)">Search</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchBar",
  data(){
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>