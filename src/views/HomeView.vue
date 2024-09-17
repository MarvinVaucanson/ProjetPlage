<script setup>
  import DestinationCard from "./DestinationCard.vue"
  // import sourceData from '@/assets/data.json'
  // const destinations = sourceData.destinations
  // import axios from 'axios'
  import { ref } from 'vue'
  let destinations = ref(null)
  import { useDestinationService } from '/services/DestinationService.js';
    const destinationService = useDestinationService()
    destinationService.getDestinations()
    .then((response) => {
    destinations.value = response.data })
    .catch((error) => {
    console.log(error.message) })

  // fetch('https://my-json-server.typicode.com/goncalve/plage/destinations')
  //   then((response)=> {
  //     if (response.ok) {
  //       return response.json()}
  //     }
  //     else {
  //       throw 'Err' + response.status
  //     })
  //     .then((data) => { destinations.value = })
  //   })

</script>

<template>
  <main>
    <p>
      Home
    </p>
      <div id="destinations">
        <DestinationCard 
          v-for="i in destinations"
          :key="i" :info="i" :id="i.id" :name="i.name" :image="i.image">
        </DestinationCard>
      </div>
  </main>
</template>

<style scoped>
img {
  max-width: 230px;
}
#destinations {
  display: flex;
  justify-content: space-between;
}
</style>
