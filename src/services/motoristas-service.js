import { URL } from '@/constants'

const getAllMotoristas = () => {
  return axios.get(`${URL.API}/motorista`)
    .then(res => res.data)
}

const postMotorista = (motorista) => {
  return axios.post(`${URL.API}/motorista`, motorista)
}

export {
  getAllMotoristas,
  postMotorista
}
