import { URL } from '@/constants'

const getAllDestinos = () => {
  return axios.get(`${URL.API}/destino`)
    .then(res => res.data)
}

const postDestino = (destino) => {
  return axios.post(`${URL.API}/destino`, destino)
}

export {
  getAllDestinos,
  postDestino
}
