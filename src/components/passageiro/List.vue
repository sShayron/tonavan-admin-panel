<template>
    <section class="column widget">
        <section class="painel">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                        Passageiros 
                    </h1>
                </div>

                <div class="column is-6 has-text-right">
                    <a href="#/passageiro/form" class="button is-warning is-medium">
                        
                        <span>Novo Passageiro</span>
                    </a>
                </div>
            </div>
        </div>
        <hr>
        </section>

        <section class="column is-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Nº Documento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(passageiro, index) in passageiros">
                        <td>{{ passageiro.nome }} {{ passageiro.sobrenome }}</td>
                        <td>{{ passageiro.email }}</td>
                        <td>{{ passageiro.celular }}</td>
                        <td>{{ passageiro.numeroDocumento }}</td>

                        <td style="text-align:right">
                            <a class="button is-warning is-outlined has-text-center" style="margin-right:10px">
                                <i class="fa fa-edit"></i>
                            </a>
                            <button @click="del(index)" class="button is-danger is-outlined has-text-center">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    passageiros: 'passageiros'
  }),
  created () {
    this.$store.dispatch('setPassageiros')
  },
  data () {
    return {
    }
  },

  methods: {
    del (index) {
      this.passageiros.splice(index, 1)
    }
  }
}
</script>
