import { URL } from '@/constants'

const getAllHorarios = () => {
  return axios.get(`${URL.API}/horario`)
    .then(res => res.data)
}

const postHorario = (horario) => {
  return axios.post(`${URL.API}/horario`, horario)
}

export {
  getAllHorarios,
  postHorario
}
