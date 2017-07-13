import { SET_EMPRESA } from '../mutations-types'
import getAllEmpresa from '@/services/empresa-service'

// initial state
const state = {
  dadosEmpresa: {}
}

// getter
const getters = {
  empresas: state => state.dadosEmpresa,
  currentEmpresa: state => {
    return state.dadosEmpresa[0] || ''
  }
}

// actions
const actions = {
  setEmpresa ({ commit }) {
    getAllEmpresa()
      .then(empresa => {
        commit(SET_EMPRESA, { empresa })
      })
  }
}

// mutations
const mutations = {
  [SET_EMPRESA] (state, { empresa }) {
    state.dadosEmpresa = empresa
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
