import { SET_ENDERECOS, CREATE_ENDERECO } from '../mutations-types'
import { getAllEnderecos, postEndereco } from '@/services/enderecos-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  enderecos: state => state.list
}

// actions
const actions = {
  setEnderecos ({ commit }) {
    getEnderecoPorCEP()
      .then(enderecos => {
        commit(SET_ENDERECOS, { enderecos })
      })
  },
  createEndereco ({commit}, endereco) {
    postEndereco(endereco)
      .then(endereco => {
        commit(CREATE_ENDERECO, {endereco})
      })
  },
}

// mutations
const mutations = {
  [SET_ENDERECOS] (state, { enderecos }) {
    state.list = enderecos
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
