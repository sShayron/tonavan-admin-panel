<template>
    <section class="column widget">
        <section class="painel">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h1 class="title">
                        Horarios
                    </h1>
                </div>

                <div class="column is-6 has-text-right">
                    <a href="#/horario/form" class="button is-warning is-medium">
                        
                        <span>Novo Horário</span>
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
                        <th>Horário de Partida</th>
                        <th>Horário de Retorno</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(horario, index) in horarios">
                        <td>{{ horario.horarioIda }}</td>
                        <td>{{ horario.horarioVolta }}</td>

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
    horarios: 'horarios'
  }),
  created () {
    this.$store.dispatch('setHorarios')
  },
  data () {
    return {
    }
  },

  methods: {
    del (index) {
      this.horarios.splice(index, 1)
    }
  }
}
</script>
