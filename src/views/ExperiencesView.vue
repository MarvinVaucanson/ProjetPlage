<script setup>
  import ExperienceCard from "../components/ExperienceCard.vue"
  defineProps(['dest'])

</script>

<template>
    <ul class="cards">
        <li v-for="experience in dest.experiences" :key="experience.id">
        <ExperienceCard :experience="experience"></ExperienceCard>
        </li>
    </ul>    
</template>

<style scoped>
ul.cards {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  list-style-type: none;
  padding-left: 0;
}
</style>