import { URL } from '@/constants'

const getEnderecoPorCEP = (cep) => {
  return axios.get(`${URL.API}/endereco/cep`, {
      params: {
          cep: cep
      }
  })
    .then(res => res.data)
}

const postEndereco = (endereco) => {
  return axios.post(`${URL.API}/endereco`, endereco)
}

export {
  getEnderecoPorCEP,
  postEndereco
}
