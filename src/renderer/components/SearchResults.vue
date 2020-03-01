<template>
    <div>
        <span class="buton" @click="goBack">&#128072; BACK</span>
        <h2>Results:</h2>
        
        <ApartamentList v-for="apartament in getSearchResults" :apartament="apartament" :key="apartament.id"></ApartamentList>
    </div>
</template>

<script>

import ApartamentList from './ApartamentList'
export default {
    data() {
        return {}
    },
    components: {
        ApartamentList
    },
    computed: {
        getSearchResults() {
            return this.$store.getters.getSearchResults
        }
    },
    methods: {
        goBack() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>