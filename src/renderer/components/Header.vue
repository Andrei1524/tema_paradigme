<template>
  <header>
    <nav>
      <router-link class="nav-link" to="/">
        <!-- <font-awesome-icon icon="coffee"></font-awesome-icon> -->
        &#9962;
        Apartamente
      </router-link>
      <router-link class="nav-link" to="/adauga">&#10010; Adauga</router-link>

      <div class="search-wrapper">
          <input type="text" placeholder="cauta dupa nume" class="search nav-link" v-model="searchCriteria.nume" @keyup="searchAp">
        <div class="pret">
            <input type="number" v-model="searchCriteria.pret.de_la" placeholder="pret de la: "> | <input type="number" v-model="searchCriteria.pret.pana_la" placeholder="pana la:">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      switchRoute: false,
      showOtherOptions: false,
      searchCriteria: {
        nume: "",
        pret: {
          de_la: 0,
          pana_la: 0
        }
      }
    }
  },
  created() {
  },
  methods: {
    searchAp(e) {
      if (this.switchRoute === false) {
        this.switchRoute = true;
      }

      if (!(this.switchRoute && this.$router.history.current.fullPath == '/search')) {
        this.$router.push('/search')

        
      }

      if (!e.target.value) {
        this.$router.push('/')
        this.showOtherOptions = false;
      }
     this.$store.dispatch('searchAp', this.searchCriteria)
    }
  }
};
</script>

<style scoped lang="scss">
nav {
    display: flex;
        align-items: center;
}
.nav-link {
    text-decoration: none;
    color: black;
    padding: 6px 11px;
    margin: 5px;
    background: #fdfdfd;
    border: 1px solid #cecece;
    transition: 0.4s;
    i {
        color: #40a6b1;
    }

    &:hover {
      background: #e0e0e0;
      color: #000000;
    }
}

header {
    padding: 5px;
    background: #f1f1f1;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0px 1px 3px #969696;
    z-index: 9999;
    box-sizing: border-box;
}

.search-wrapper {
      margin-left: auto;
    text-align: center;
}
.pret {

  input {
    width: 50px;
  }
}
</style>
