let fs = require('fs');
let localData = process.env.APPDATA + "/cauta_apartamente/data"
let  rimraf = require("rimraf"); // pt stergerea unui folder cu fisiere

const state = {
  apartamente: [],
  searchKeywords: {},
  postIndexCounter: 0
}

const mutations = {
  initData(state, payload) {
    state.apartamente = payload.apartamente
    state.postIndexCounter = payload.postIndexCounter
  },
  deleteAp(state, payload) {
    state.apartamente = payload.apartamente
    state.postIndexCounter = payload.postIndexCounter
  },
  searchAp(state, payload) {
    state.searchKeywords = payload
  }

}

const actions = {
  initDataAction({commit}) {
    let dataJSON = JSON.parse(fs.readFileSync(localData + "/data.json"))
    
    commit('initData', dataJSON)
  },
  deleteAp({commit, dispatch}, ap) {
    let dataJSON = JSON.parse(fs.readFileSync(localData + "/data.json"))
    
    let foundAp = dataJSON.apartamente.filter(apart => apart.id !== ap.id)
    
    dataJSON.apartamente = foundAp

    //console.log(dataJSON)
    
    fs.writeFileSync(localData + "/data.json", JSON.stringify(dataJSON))
    rimraf(`${localData}/${ap.id}`, function () { console.log("done"); });

    dispatch('initDataAction')
  },
  adaugaAp({commit, dispatch}, apartament) {
        // let idIndex = JSON.parse(fs.readFileSync(localData + "/data.json")).postIndexCounter

          //creaza folderul cu imaginea, folder cu numele id ului postarii
          fs.mkdirSync(localData + `/${apartament.id}`)
          
          fs.readFile(localData + "/data.json", (err, file) => {
            let fileParsed = JSON.parse(file)
              fileParsed.postIndexCounter++;

              apartament.imagini.forEach(imagine => {
                  let fl =  fs.readFileSync(imagine.path)
                  let nume_poza = imagine.name
          
                  fs.writeFileSync(localData + `/${apartament.id}/${nume_poza}`, fl)
                  apartament.imaginiPaths.push(localData + `/${apartament.id}/${nume_poza}`)
              })

              

              fileParsed.apartamente.push(apartament)
              // seteaza path-ul cu viitoarele imagini
              

              // console.log(fileParsed)
              fs.writeFileSync(localData + "/data.json", JSON.stringify(fileParsed))
              
              dispatch('initDataAction')
          })
  },
  searchAp({commit}, payload) {
    commit('searchAp', payload);
  }
}

const getters = {
    getApartamente(state) {
        return state.apartamente
    },
    getSearchResults(state) {
        let nume = state.searchKeywords.nume.replace(/ /g, "")
        let results = state.apartamente.filter(ap => ap.nume.indexOf(nume) >= 0 )
        // 

        if (state.searchKeywords.pret.de_la) {
          results = results.filter(ap => Number(ap.pret) >= Number(state.searchKeywords.pret.de_la))
        }

        if (state.searchKeywords.pret.pana_la) {
          results = results.filter(ap => Number(ap.pret) <= Number(state.searchKeywords.pret.pana_la))
        }

        return results
      
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}
