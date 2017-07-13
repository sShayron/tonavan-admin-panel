import Vue from 'vue'
import Router from 'vue-router'

import auth from './auth'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Empresa from '@/components/Empresa'
import VeiculoForm from '@/components/veiculo/Form'
import VeiculoList from '@/components/veiculo/List'
import PassageiroForm from '@/components/passageiro/Form'
import PassageiroList from '@/components/passageiro/List'
import MotoristaForm from '@/components/motorista/Form'
import MotoristaList from '@/components/motorista/List'
import HorarioForm from '@/components/horario/Form'
import HorarioList from '@/components/horario/List'
import DestinoForm from '@/components/destino/Form'
import DestinoList from '@/components/destino/List'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/empresa',
      name: 'Empresa',
      component: Empresa
    },
    {
      path: '/veiculo/list',
      name: 'veiculo.list',
      component: VeiculoList
    },
    {
      path: '/veiculo/form',
      name: 'veiculo.form',
      component: VeiculoForm
    },
    {
      path: '/passageiro/form',
      name: 'passageiro.form',
      component: PassageiroForm
    },
    {
      path: '/passageiro/list',
      name: 'passageiro.list',
      component: PassageiroList
    },
    {
      path: '/motorista/form',
      name: 'motorista.form',
      component: MotoristaForm
    },
    {
      path: '/motorista/list',
      name: 'motorista.list',
      component: MotoristaList
    },
    {
      path: '/horario/form',
      name: 'horario.form',
      component: HorarioForm
    },
    {
      path: '/horario/list',
      name: 'horario.list',
      component: HorarioList
    },
    {
      path: '/destino/form',
      name: 'destino.form',
      component: DestinoForm
    },
    {
      path: '/destino/list',
      name: 'destino.list',
      component: DestinoList
    }
  ]
})
