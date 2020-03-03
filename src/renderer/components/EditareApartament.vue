<template>
    <div class="view_ap">

        <h2>Editeaza postarea</h2>
        <span class="save" @click="save">&#9989; SALVEAZA</span>
        <span class="edit" @click="goBack">&#9998; EDIT</span>
        <h1><input class="nume" type="text" :value="getApartament.nume"></h1>

        <img class="ap_first_img" :src="getApartament.imaginiPaths[0]" alt="">

        <div class="ap_info">
            <h3>&euro; <input class="pret pret-input" type="number" :value="getApartament.pret"></h3>
            <h3><input class="suprafata" type="number" :value="getApartament.suprafata"> <small>mp<sup>2</sup></small></h3>
            <h3><input class="camere" type="number" :value="getApartament.camere"> camere</h3> 
        </div>

        <h2>Mai multe imagini: </h2>
        <div class="ap_imagini">
            <img @click="delImg(imagine)" class="img" v-for="imagine in getApartament.imaginiPaths" :key="imagine" :src="imagine" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        getApartament() {
            return this.$store.getters.getApartament(this.$router.currentRoute.params.id)
        }
    },
    methods: {
        delImg(imagine) {

            let confirma_stergerea_pozei = confirm('Sigur vrei sa stergi poza?')

            if (confirma_stergerea_pozei) {
                let apImagini = this.$store.getters.getApartamente
            

            this.$store.dispatch('deleteImage', imagine)
            }
            
        },
        goBack() {
            this.$router.push(`/ap/${this.getApartament.id}`)
        },
        save() {

            let apartament = {
                id: this.$route.params.id ,
                nume: document.querySelector('.nume').value,
                suprafata: document.querySelector('.suprafata').value,
                camere: document.querySelector('.camere').value,
                pretFormated: undefined,
                pret: document.querySelector('.pret-input').value,
                imagini: [],
                imaginiPaths: this.getApartament.imaginiPaths
            }
            
            
            this.$store.dispatch('editeazaAp', apartament)
            
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

.flash-save {
    animation-name: save_flash;
    animation-duration: 1s;
    animation-timing-function: ease;
}

@keyframes save_flash {
    0% {
        border: 1px solid #cecece;
    }
    50% {
        border: 1px solid green;
    }
    100% {
        border: 1px solid #cecece;
    }
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

.save {
    position: absolute;
    right: 103px;
    top: 5px;
    font-size: 19px;
    padding: 2px 14px;
    padding-bottom: 5px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #ffffff;
    background: #48c586;
    color: #FFF;

    &:hover {
        background: #48c5b9;
    }
}

.nume {
    border: none;
    height: 100%;
    display: block;
    font-size: 24px;
    color: #3e3e3e;
    font-weight: 600;
    border-bottom: 1px solid #c7c7c7;
    padding: 5px;
}

.pret {
    border: none;
    height: 100%;
    font-size: 14px;
    color: #3e3e3e;
    font-weight: 600;
    border-bottom: 1px solid #c7c7c7;
    width: 100px;
}

.suprafata {
    border: none;
    height: 100%;
    font-size: 14px;
    color: #3e3e3e;
    font-weight: 600;
    border-bottom: 1px solid #c7c7c7;
    width: 50px;
}
.camere {
    border: none;
    height: 100%;
    font-size: 14px;
    color: #3e3e3e;
    font-weight: 600;
    border-bottom: 1px solid #c7c7c7;
    width: 35px;
}
</style>