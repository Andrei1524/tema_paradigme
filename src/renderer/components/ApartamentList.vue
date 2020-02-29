<template>
    <div class="ap">
        <div class="ap-nume"><h2>{{apartament.nume}}</h2> <h5>{{ apartament.pret }}</h5></div>
        <div class="ap-detali">
            <h3>{{ apartament.suprafata }} <small>mp<sup>2</sup></small></h3> 
            <h3>|</h3>
            <h3>{{ apartament.camere }} camere</h3>
        </div>

        <div class="imagini-ap">
            <img class="img" v-for="imagine in apartament.imaginiPaths" :key="imagine" :src="imagine" alt="">
        </div>

        <div class="delete-ap" @click="deleteAp(apartament)">
            <span>X</span>
            <span>DELETE</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ['apartament'],
    methods: {
        deleteAp(ap) {
            this.$store.dispatch('deleteAp', ap);
        }
    }
}
</script>


<style scoped lang="scss">
h2,h3,h4, h5 {
        margin: 0;
    }
.ap-nume {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px;
    
    h2 {
        font-weight: 400;
    }
    h3 {
        font-weight: 400;
    }

    h4 {
        font-weight: bold;
    }
}
.ap {
    position: relative;
    border: 1px solid #cecece;
    margin: 10px;
    padding: 0 5px;
    /* width: 50%; */
    max-width: 450px;
    min-width: 340px;
    letter-spacing: 2px;
    box-shadow: 0 2px 6px #c7c7c7;
}

.ap-detali {
    display: flex;
        font-size: 13px;
    h3 {
        font-weight: 300;
        margin: 0 5px;
    }
    
}

.imagini-ap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    padding: 5px;
    margin-top: 30px;
    border-top: 1px solid #dedede;
    .img {
        display: block;
        height: 100px;
        background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
    }
}

.delete-ap {
    display: block;
    background: #cc5858;
    padding: 4px;
    position: absolute;
    right: 2px;
    bottom: 2px;
    transition: width 0.4s;
    width: 20px;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;


    span {
        display: inline-block;
    }

    span:nth-child(1) {
        background: #FFF;
        color: #000;
        padding-left: 5px;
        padding-right: 4px;
        border-radius: 50%;
    }

    span:nth-child(2) {
        width: 0px;
        position: absolute;
        top: 50%;
        transform: translateY(-54%);
        opacity: 0;
        transition: all 0.4s;
    }


    &:hover  {
        width: 85px;
    }

    &:hover > span:nth-child(2) {
        width: 55px;
        opacity: 1;
        right: 11px;
    }
}

</style>