<script setup>
  const props = defineProps(["info","name","image","id"])
  // import { ref } from 'vue'
  // import sourceData from '@/assets/data.json'
  // const destinations = sourceData.destinations
  const path = "/src/assets/images/"+props.image
  const path2 = "/destination/"+props.id //router link
</script>

<template>
  <div class="destination">
    <RouterLink :to="path2"><h2>{{ props.name }}</h2>
      <img :src=path alt="Plage Hawaiienne">
    </RouterLink>
  </div>
</template>
<style scoped>
.destination {
  padding: 0.3rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid #39495c;
}
.destination img {
  max-width: 230px;
}

h2{
  color: white;
}
</style>
