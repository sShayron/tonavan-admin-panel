import { URL } from '@/constants'

const getAllEmpresa = () => {
  return axios.get(`${URL.API}/empresa`)
    .then(res => res.data)
}

export default getAllEmpresa
