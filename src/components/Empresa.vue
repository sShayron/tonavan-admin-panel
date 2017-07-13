<template>
  <section class="column is-9 is-offset-1">
    <section class="">
      <div class="container">
        <h1 class="title">
          Empresa
        </h1>
      </div>
      <hr>
    </section>
    <div class="column is-9">
      <div class="control is-horizontal">
        <div class="control-label">
          <label class="label" style="font-weight:400;">
              Empresa
          </label>
        </div>

        <div class="control is-grouped">
          <p class="control">
            <input class="input" type="text" placeholder="Empresa" v-model="empresa.nomeEmpresa">
          </p>

          <div class="control-label">
            <label class="label" style="font-weight:400;">
                CNPJ
            </label>
          </div>

          <p class="control is-expanded">
            <input class="input" type="text" placeholder="CNPJ" v-model="empresa.cnpj">
          </p>
        </div>
      </div>

      <div class="control is-horizontal">
        <div class="control-label">
          <label class="label" style="font-weight:400;">
              Endereco
          </label>
        </div>

        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Endereco">
        </p>
      </div>

      <div class="control is-horizontal">
        <div class="control is-grouped">
          <div class="control-label">
            <label class="label" style="font-weight:400;">
                Cidade
            </label>
          </div>

          <div class="control">
            <v-select :value.sync="selectedCid" :options="cidades"></v-select>
          </div>
            
          <div class="control-label">
            <label class="label" style="font-weight:400;">
                Universidades
            </label>
          </div>

          <div class="control">
              <v-select multiple :value.sync="selectedUniv" :options="universidades"></v-select>
          </div>

        </div>
      </div>
      <div class="column is-4 is-offset-8 has-text-right">
          <a class="button is-primary is-outlined">Salvar</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import vSelect from 'vue-select'

export default {
  components: {vSelect},
  computed: {
    ...mapGetters({
      empresa: 'currentEmpresa'
    })
  },
  created () {
    this.$store.dispatch('setEmpresa')
  },
  data () {
    return {
      selectedUniv: ['UVV'],
      selectedCid: 'Vila Velha',
      universidades: ['UVV', 'Faesa', 'Multivix'],
      cidades: ['Vila Velha', 'Vitória', 'Serra']
    }
  }
}
</script>

<style scoped>
section {
  margin: 15px 0;
}
h1 {
  text-align: left;
}
.control-label {
  max-width: 100px;
}
div.select {
  min-width: 200px;
}
select {
  min-width: 100%;
}
select, input {
  height: 35px;
}

</style>
