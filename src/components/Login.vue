<template>
  <div class="login">
    <div class="login__wrapper">
      <img class="logo" src="~assets/logo.png">
      <p v-if="$route.query.redirect">
        <!-- Redirecionado faça o login para continuar -->
      </p>
      <form class="login__form" @submit.prevent="login">
        <label><input v-model="email" placeholder="Email"></label>
        <label><input v-model="pass" placeholder="Senha" type="password"></label>
        <p v-if="error" class="error">Usuário ou senha incorretos</p>
        <button class="button is-login" type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import auth from '@/router/auth'

export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
