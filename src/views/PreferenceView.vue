<script setup>
    import { useDestinationStore } from '../stores/DestinationStore'
    import { ref } from 'vue';
    import { useDestinationService } from '/services/DestinationService.js';
    const destinationService = useDestinationService()
    // const selectedFav = ref('');

    const destinations = ref(null)
    // const selectedDestinationId = ref(null);

    const idPrefered = useDestinationStore();
    console.log(idPrefered);

    destinationService
        .getDestinations()
        .then((response) => {
            destinations.value = response.data
        })
        .catch((error) => {
            console.log(error.message)
        })
        // console.log(selectedDestinationId)
</script>

<template>
    <h2>Preference</h2>
    <fieldset ><legend>Quel est ta destination favorite</legend>
        <form>
            <label v-for="destination in destinations" :key="destination"><input type="radio" v-model="idPrefered" :value="destination.id" name="favori"/>{{ destination.name }}</label>
        </form>
    </fieldset>
</template>