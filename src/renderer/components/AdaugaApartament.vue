<template>
  <div class="form">
    <div>
      <label for="">Nume:</label>
      <input type="text" v-model="apartament.nume" @keyup="checkIfApNameExists" />
      <span class="error-span" v-if="error.tip == 'nume'">{{ error.erroare }}</span>
    </div>
    <div>
      <label for="">Pret:</label>
      <input type="text" @change="checkForText" v-model="apartament.pretFormated" />
    </div>
    <div>
      <label for="">Suprafata:</label>
      <input type="number" v-model="apartament.suprafata" />
    </div>
    <div>
      <label for="">Camere:</label>
      <input type="number" v-model="apartament.camere" />
    </div>

    <div>
      <label for="">Imagini:</label>
      <div class="imagini-prew">
          
          <img v-for="imagine in imagini_preview" :src="imagine" :key="imagine" alt="" class="img">
      </div>
    
      <img src="../assets/add_image.png" @click="selectImage" alt="" class="adaugaImagini">
      <input type="file" @change="currentImage" class="addImage" value=""/>
    </div>
    

    <button @click="save" class="buton-salveaza buton">Salveaza</button>
  </div>
</template>

<script>
const fs = require('fs-extra')
const path = require("path")
let localData = process.env.APPDATA + "/cauta_apartamente/data"
const currency = require('currency.js')


export default {
    data() {
        return {
            apartament: {
                id: JSON.parse(fs.readFileSync(localData + "/data.json")).postIndexCounter += 1,
                nume: "",
                suprafata: undefined,
                camere: undefined,
                pretFormated: undefined,
                pret: 0,
                imagini: [],
                imaginiPaths: []
            },
            imagini_preview: [],
            error: {}
        }
    },
    computed: {
    },
    created() {
        // this.checkIfApNameExists()
    },
    methods: {
        save() {
          if (!this.error.tip) {
            
              this.$store.dispatch('adaugaAp', this.apartament)
              this.$router.push("/")
          }
         
        // fs.copyFile(this.apartament.imagini.path, localData + `/${this.apartament.id}`, (err) => {
        //   if (err) console.log(err)
        //     console.log("copied")
        // })  

        },
        selectImage() {
            let input = document.querySelector(".addImage");
            input.click()
        },
        currentImage(e) {
          if (e.target.files[0] !== undefined)
            this.apartament.imagini = [...this.apartament.imagini, e.target.files[0]]
            this.imagini_preview = this.apartament.imagini.map(im => im.path)
        },
        pretStyle(e) {
          
          
        },
        checkForText(e) {
          
         const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
          })

          this.apartament.pretFormated = formatter.format(this.apartament.pretFormated)
          this.apartament.pret = e.target.value;
        },

        checkIfApNameExists() {
          
          const apartamente =  JSON.parse(fs.readFileSync(localData + "/data.json")).apartamente
          let exista = false;

          apartamente.forEach(ap => {
            if (ap.nume.replace(/ /g, "") == this.apartament.nume.replace(/ /g, "")) {
              exista = true;
            }
          })

          if (exista) {
            this.error = {
              tip: "nume",
              erroare: "Exista deja un apartament cu acest nume!"
            }
          } else {
            this.error = {}
          }
        }
    }
};
</script>

<style scoped lang="scss">
.form div label {
    display: inline-block;
    width: 100px;
}
.form div input {
    padding: 7px 5px;
    border-radius: 2px;
    border: 1.4px solid #9c9c9c;
    color: #2b2b2b;
    letter-spacing: 2.5px;
    width: 80%;
}

.form div {
    width: 100%;
    display: block;
    
    margin: 8px 0;
}

.form {
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 580px;
    margin: 0 auto;
}

.addImage {
  background: url("../assets/add_image.png");
}

.addImage[type="file"] {
  display: none;
}

.adaugaImagini {
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;

}

.imagini-prew {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
  .img {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 110px;
    display: block;
    
  }
}

.error-span {
  color: red;
}

</style>
