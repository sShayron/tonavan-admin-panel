import { SET_DESTINOS, CREATE_DESTINO } from '../mutations-types'
import { getAllDestinos, postDestino } from '@/services/destino-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  destinos: state => state.list
}

// actions
const actions = {
  setDestinos ({ commit }) {
    getAllDestinos()
      .then(destinos => {
        commit(SET_DESTINOS, { destinos })
      })
  },
  createDestino ({commit}, destino) {
    postDestino(destino)
      .then(destino => {
        commit(CREATE_DESTINO, {destino})
      })
  }
}

// mutations
const mutations = {
  [SET_DESTINOS] (state, { destinos }) {
    state.list = destinos
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
