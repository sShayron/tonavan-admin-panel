<template>
  <div class="menu" style="min-height: 100vh; margin-right: 40px;positon:fixed;">
    <section class="header">
      <nav class="nav" style="background: linear-gradient(#ffc460 0%, #d9a751 100%); height: 60px; font-size: 18px;">
        <div class="nav-left">
          <a href="/" class="nav-item" style="padding:0 20px; font-size:16px;">
            <img class="logo" src="~assets/logo.png" style="height: 45px; max-height: none; margin: 0 10px;">
            <span>Tô na Van</span>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </nav>

       <div style="padding:40px 20px;color:#c0c0c0;margin-bottom: -10px;">
          
           <router-link to="/empresa" style="color:#c0c0c0" >{{currentEmpresa.nomeEmpresa}}</router-link>
           <br>
           <router-link to="/empresa" style="color:#c0c0c0" ><span style="font-size:13px;color:rgb(144, 144, 144)">Meu Cadastro</span></router-link>
        </div> 
    </section>
     
    <menus>
      <div class="divider"></div>
      
      <menu-item icon="car" to="/veiculo/list">
        Veículos
      </menu-item>
      <menu-item icon="user" to="/motorista/list">
          Motoristas
      </menu-item>
      <menu-item icon="users" to="/passageiro/list">
          Passageiros
      </menu-item>
      <menu-item icon="clock-o" to="/horario/list">
          Horários
      </menu-item>
      <menu-item icon="map-marker" to="/destino/list">
          Destinos
      </menu-item>
      <div class="divider"></div>
      <menu-item icon="sign-out" :click="logoutS">
          Sair
      </menu-item>
      <div class="divider"></div>
    </menus>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import auth from '@/router/auth'

export default {
  name: 'navbar',
  computed: mapGetters({
    currentEmpresa: 'currentEmpresa'
  }),
  created () {
    this.$store.dispatch('setEmpresa')
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    logoutS () {
      auth.logout(this.$router.push({path: '/login'}))
    }
  }
}

</script>

<style scoped>
.black-nav {
  background-color: black;
}
.menu-list {
  font-size: 18px;
}
.padding-15 {
  padding: 15px!important;
}
</style>
