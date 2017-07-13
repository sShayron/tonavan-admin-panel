import { URL } from '@/constants'

const getAllCharacters = () => {
  return axios.get(`${URL.API_TESTE}/people`)
    .then(res => res.data.results)
}

export default getAllCharacters
