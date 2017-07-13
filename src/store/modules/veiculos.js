import { SET_VEICULOS, CREATE_VEICULO } from '../mutations-types'
import { getAllVeiculos, postVeiculo } from '@/services/veiculos-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  veiculos: state => state.list
}

// actions
const actions = {
  setVeiculos ({ commit }) {
    // return this all to use promisse in component
    getAllVeiculos()
      .then(veiculos => {
        commit(SET_VEICULOS, { veiculos })
      })
  },
  createVeiculo ({commit}, veiculo) {
    postVeiculo(veiculo)
      .then(veiculo => {
        commit(CREATE_VEICULO, {veiculo})
      })
  }
}

// mutations
const mutations = {
  [SET_VEICULOS] (state, { veiculos }) {
    state.list = veiculos
  },
  [CREATE_VEICULO] (state, {veiculo}) {
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
