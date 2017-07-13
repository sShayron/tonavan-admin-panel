import { SET_HORARIOS, CREATE_HORARIO } from '../mutations-types'
import { getAllHorarios, postHorario } from '@/services/horario-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  horarios: state => state.list
}

// actions
const actions = {
  setHorarios ({ commit }) {
    getAllHorarios()
      .then(horarios => {
        commit(SET_HORARIOS, { horarios })
      })
  },
  createHorario ({commit}, horario) {
    postHorario(horario)
      .then(horario => {
        commit(CREATE_HORARIO, {horario})
      })
  }
}

// mutations
const mutations = {
  [SET_HORARIOS] (state, { horarios }) {
    state.list = horarios
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
