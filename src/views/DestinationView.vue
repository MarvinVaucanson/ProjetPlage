<script setup>
  const props = defineProps(["id"])
  import { ref } from 'vue'
  import { watchEffect } from "vue";
  import { RouterLink } from "vue-router"


  // import axios from 'axios'
  let destination = ref(null)
  import { useDestinationService } from '/services/DestinationService.js';
    const destinationService = useDestinationService()

    watchEffect( () => {
    destinationService.getDestination(props.id)
    .then((response) => {
    destination.value = response.data })
    .catch((error) => {
    console.log(error.message) })

    console.log(destination)
    })
</script>

<template>
    <div v-if="destination" class="destination">
      <h2>{{ destination.name }}</h2>
      <div class="destination-details">
        <section class="dest-illu">
            <img :src="`/src/assets/images/${destination.image}`" alt="une plage hawaiienne au couché du soleil"><img>
        </section>

        <section class="destination-information">
        <nav>        
          <ul>
            <li><RouterLink :to="{name: 'description'}">Description</RouterLink></li>
            <li><RouterLink :to="{name: 'experience'}">Experience</RouterLink></li>
          </ul>
        </nav>
          <RouterView :dest="destination"></RouterView>
        </section>
      </div>
    </div>

</template>

<style scoped>
/* Destination Details */
.destination-details {
  display: flex;
  gap: 30px;
  align-items: start;
}
.destination-details img {
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.destination nav ul {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  line-height: 4ch;
  border-bottom: 1px solid;
  width: 50ch;
}
.destination nav a {
  padding: 0 1ch;
  text-decoration: none;
  display: block;
  color: #0d6efd;
}
.destination nav a.router-link-exact-active {
  border-left: 1px solid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: #2c3e50;
}
</style>