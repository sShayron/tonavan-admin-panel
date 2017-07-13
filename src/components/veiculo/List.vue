<template>
    <section class="column widget">
        <section>
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                        Veículos 
                    </h1>
                </div>

                <div class="column is-6 has-text-right">
                    <a href="#/veiculo/form" class="button is-warning is-medium">                        
                        <span>Novo Veículo</span>
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
                        <th>Placa</th>
                        <th>Vagas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(veiculo, index) in veiculos">
                        <td>{{ veiculo.numeroPlaca }}</td>
                        <td>{{ veiculo.numeroVagas }}</td>

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
    veiculos: 'veiculos'
  }),
  created () {
    this.$store.dispatch('setVeiculos')
  },
  data () {
    return {
    }
  },

  methods: {
    del (index) {
      this.veiculos.splice(index, 1)
    }
  }
}
</script>
