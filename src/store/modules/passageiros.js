import { SET_PASSAGEIROS } from '../mutations-types'
import getAllPassageiros from '@/services/passageiros-service'

// initial state
const state = {
  list: []
}

// getter
const getters = {
  passageiros: state => state.list
}

// actions
const actions = {
  setPassageiros ({ commit }) {
    getAllPassageiros()
      .then(passageiros => {
        commit(SET_PASSAGEIROS, { passageiros })
      })
  }
}

// mutations
const mutations = {
  [SET_PASSAGEIROS] (state, { passageiros }) {
    state.list = passageiros
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
