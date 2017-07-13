<template>
  <div id="app">
    <div>
      <div class="columns" style="min-height: 100vh; background-color: #f0f0f0;">
        <template v-if="loggedIn">
          <div class="column is-3">
            <SideMenu></SideMenu>
          </div>
        </template>
        <div class="column is-8">
          <transition name="slide-fade" >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/globals/SideMenu'
import auth from '@/router/auth'

export default {
  name: 'app',
  components: {
    SideMenu
  },
  data () {
    return {
      template: 'To na Van',
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style lang="sass">
@import '~@/assets/sass/main';
</style>
