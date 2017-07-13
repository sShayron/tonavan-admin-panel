import Vue from 'vue'
import Vuex from 'vuex'

import characters from './modules/characters'
import empresa from './modules/empresa'
import veiculos from './modules/veiculos'
import passageiros from './modules/passageiros'
import motoristas from './modules/motoristas'
import destinos from './modules/destinos'
import horarios from './modules/horarios'

import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    characters,
    empresa,
    veiculos,
    passageiros,
    motoristas,
    destinos,
    horarios
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
