<script setup>
  import { RouterLink } from "vue-router"
  import { ref } from 'vue'
  import { useDestinationService } from '/services/DestinationService.js';
  const destinationService = useDestinationService()

  let destinations = ref(null)

    destinationService
      .getDestinations()
      .then((response) => {
        destinations.value = response.data
        destinations.value = destinations.value.filter((d)=>d.id !==3)
      })
      .catch((error) => {
        console.log(error.message)
      })


</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/destination/3">Fav Hawaii</RouterLink>
    <RouterLink v-for="i in destinations" :to="{name: 'destination', params: {id: i.id}}" :key="i.id">{{ i.name }}</RouterLink>
    <RouterLink to="/preference">Preference</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}
nav a.active,
nav a:hover {
  opacity: 1;
}
</style>