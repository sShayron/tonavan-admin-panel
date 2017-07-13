import { SET_CHARACTERS } from '../../mutations-types'
import getAllCharacters from '@/services/characters-service'

const actions = {
  setCharacters ({ commit }) {
    getAllCharacters()
      .then(characters => {
        commit(SET_CHARACTERS, { characters })
      })
  }
}

export default actions
