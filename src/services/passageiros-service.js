import { URL } from '@/constants'

const getAllPassageiros = () => {
  return axios.get(`${URL.API}/passageiro`)
    .then(res => res.data)
}

export default getAllPassageiros
