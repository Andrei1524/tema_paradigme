<template>
  <header>
    <nav>
      <router-link class="nav-link" to="/">
        <!-- <font-awesome-icon icon="coffee"></font-awesome-icon> -->
        &#9962;
        Apartamente
      </router-link>
      <router-link class="nav-link" to="/adauga">&#10010; Adauga</router-link>

      <input type="text" placeholder="search" class="search nav-link">
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
nav {
    display: flex;
}
.nav-link {
    text-decoration: none;
    color: black;
    padding: 6px 11px;
    margin: 5px;
    background: #fdfdfd;
    text-transform: uppercase;
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

.search {
      margin-left: auto;
    text-align: center;
}
</style>
