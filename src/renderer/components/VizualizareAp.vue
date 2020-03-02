<template>
    <div class="view_ap">
        <span class="edit">&#9998; EDIT</span>
        <h1>{{ getApartament.nume }}</h1>

        <img class="ap_first_img" :src="'https://urban-invest.ro/wp-content/uploads/2018/11/apartamente-header-1.jpg'" alt="">

        <div class="ap_info">
            <h3>&euro; {{ getApartament.pret }}</h3>
            <h3>{{ getApartament.suprafata }} <small>mp<sup>2</sup></small></h3>
            <h3>{{ getApartament.camere }} camere</h3> 
        </div>

        <h2>Mai multe imagini: </h2>
        <div class="ap_imagini">
            <img @click="delImg(imagine)" class="img" v-for="imagine in getApartament.imaginiPaths" :key="imagine" :src="'https://img3.imonet.ro/XV07/V0700FPHMI2/prezentare_620x465.jpg'" alt="">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getApartament() {
            return this.$store.getters.getApartament(this.$router.currentRoute.params.id)
        }
    },
    created() {
    }
}
</script>


<style scoped lang="scss">
h1 {
    margin: 5px 0;
    margin-bottom: 10px;
}
.view_ap {
    position: relative;
    width: 75%;
    border: 1px solid #cecece;
    margin: 0 auto;
    color: #444444;
    margin-top: 8em;
    margin-bottom: 2em;
    padding: 5px 10px;
    box-shadow: 0 0 black;
    font-size: 14px;
    box-shadow: 0px 3px 4px #b7b7b7;
}

.ap_first_img {
    display: block;
    width: 100%;
}

.ap_info {
    display: flex;
    justify-content: space-between;
}
.ap_imagini {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    img {
        display: block;
        width: 100%;
        margin: 0 auto;
    }
}

.edit {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 19px;
    padding: 2px 14px;
    padding-bottom: 5px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #929292;

    &:hover {
        background: #dedede;
    }
}
</style>