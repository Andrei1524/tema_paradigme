<template>
  <div>
    <div>
      Ordoneaza dupa:

      <select id="ordoneaza-dupa" v-model="pret">
        <option value="ieftin">Ieftin</option>
        <option value="scump">Scump</option>
    </select>
    </div>
    <div v-if="getApartamente">
      <ApartamentList v-for="apartament in getApartamente" :apartament="apartament" :key="apartament.id"></ApartamentList>
    </div>

    <div v-if="getApartamente.length === 0">
      <h1>Nu exista niciun apartament listat!</h1>
    </div>
  </div>
</template>

<script>

import ApartamentList from "./ApartamentList"

// let fs = require('fs');
// let localData = process.env.APPDATA + "/cauta_apartamente/data"
// import {bus} from '../main'

export default {
  components: {ApartamentList},
  data() {
    return {
      pret: undefined
    }
  },
  created() {
  },
  computed: {
    getApartamente() {
      if (this.pret !== undefined) {
        if (this.pret == "ieftin") return this.$store.getters.getApartamente.sort((a,b) => a.pret - b.pret)
        if (this.pret == "scump") return this.$store.getters.getApartamente.sort((a,b) => a.pret - b.pret).reverse()
      }
      return this.$store.getters.getApartamente
    }
  }
};
</script>

<style lang="css" scoped></style>
