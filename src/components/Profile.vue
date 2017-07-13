<template>
  <div>
    {{template}}<br>
    {{msg}}
    <a :href="github" target="_blank"><i class="fa fa-github-square"></i></a>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      template: 'VueShay Boilerplate',
      msg: "I'm Shayron Aguiar, visit my github",
      github: 'https://github.com/sShayron'
    }
  }
}
</script>

<style scoped>

</style>
