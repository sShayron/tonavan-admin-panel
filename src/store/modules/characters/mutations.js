import { SET_CHARACTERS } from '../../mutations-types'

const mutations = {
  [SET_CHARACTERS] (state, { characters }) {
    state.list = characters
  }
}

export default mutations
