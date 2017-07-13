import { URL } from '@/constants'

const getAllVeiculos = () => {
  return axios.get(`${URL.API}/veiculo`)
    .then(res => res.data)
}

const postVeiculo = (veiculo) => {
  return axios.post(`${URL.API}/veiculo`, veiculo)
}

export {
  getAllVeiculos,
  postVeiculo
}
