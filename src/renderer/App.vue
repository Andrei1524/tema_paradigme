<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
let fs = require('fs');
import Header from "@/components/Header.vue";

let localData = process.env.APPDATA + "/cauta_apartamente/data"

  let dataJSON = {
    postIndexCounter: 0,

    apartamente: []
  }
  
export default {
  name: "cauta_apartamente",
  components: { Header },

  created() {
    

    fs.readdir(localData, (err, files) => { 
      if (err) { // daca nu exista directrul data, il cream
        console.log("eroare la incarcare data", err)

        fs.mkdirSync(localData, (err) => { // cream dir data
          if (err) console.log(err, "eroare creare directorul data")

          console.log("directorul data creat", "-> App.vue")
        })

         fs.writeFileSync(localData + "/data.json", JSON.stringify(dataJSON), (err) => { // cream si data.json
              if (err) console.log(err)

          })

      } 
      // let dataJSON = JSON.parse(fs.readFileSync(localData + "/data.json"))
        this.$store.dispatch('initDataAction');
    })
      
    
  }
};
</script>

<style>
/* CSS */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  /* background-image: url('./assets/pattern.jpg'); */
}
a, span {
  display: block;
}

.content {
    margin-top: 76px;

}

.buton {
    padding: 8px 15px;
    border: 1px solid #a9a9a9;
    background: #e8e8e8;
    color: #404040;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 2px;
    width: fit-content;
    margin: 20px 0;
    cursor: pointer;
}
</style>
