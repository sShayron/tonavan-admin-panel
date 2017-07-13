import { SET_MOTORISTAS, CREATE_MOTORISTA } from '../mutations-types'
import { getAllMotoristas, postMotorista } from '@/services/motoristas-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  motoristas: state => state.list
}

// actions
const actions = {
  setMotoristas ({ commit }) {
    getAllMotoristas()
      .then(motoristas => {
        commit(SET_MOTORISTAS, { motoristas })
      })
  },
  createMotorista ({commit}, motorista) {
    postMotorista(motorista)
      .then(motorista => {
        commit(CREATE_MOTORISTA, {motorista})
      })
  }
}

// mutations
const mutations = {
  [SET_MOTORISTAS] (state, { motoristas }) {
    state.list = motoristas
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
