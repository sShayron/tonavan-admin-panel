<template>
    <section class="column widget">
        <section class="painel">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                        Destinos
                    </h1>
                </div>

                <div class="column is-6 has-text-right">
                    <a href="#/destino/form" class="button is-warning is-medium">
                        
                        <span>Novo Destino</span>
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
                        <th>Local de Destino</th>
                        <th>Endereço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(destino, index) in destinos">
                        <td>{{ destino.nomeLocal }}</td>
                        <td>{{ destino.endereco }}</td>

                        <td style="text-align:right">
                            <a class="button has-text-center" style="margin-right:10px">

                                <i class="fa fa-edit"></i>
                            </a>
                            <button @click="del(index)" class="button has-text-center">
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
    destinos: 'destinos',
    enderecos: 'enderecos'
  }),
  created () {
    this.$store.dispatch('setEnderecos')
  },
  data () {
    return {
    }
  },

  methods: {
    del (index) {
      this.destinos.splice(index, 1)
    }
  }
}
</script>
