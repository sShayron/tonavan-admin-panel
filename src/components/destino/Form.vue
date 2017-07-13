<template>
    <section class="column widget">
        <section class="painel">
            <div class="container">
               <div class="columns">
                <div class="column is-10">
                    <h1 class="title">
                        Destinos 
                    </h1>                    
                    
                </div>

                <div class="column is-2 has-text-right">
                    <a href="#/motorista/list" class="button is-medium">
                        <span class="icon is-small">
                        <i class="fa fa-arrow-left"></i>
                        </span>
                        <span>voltar</span>
                    </a>
                    
                </div>
            </div>
            </div>
            <hr>
        </section>
        <div>
            <div class="columns">
                <div class="column is-12">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Local</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newDestino.nomeLocal" placeholder="UVV">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">CEP</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newDestino.nomeLocal" placeholder="00.000-000">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Endereço</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newDestino.nomeLocal" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">

                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Bairro</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newDestino.nomeLocal" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Cidade</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newDestino.nomeLocal" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Estado</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <v-select class="" type="text" v-model="newDestino.nomeLocal">
                                    </v-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="columns">
                 <div class="column is-12 has-text-right">
                    <hr>
                    <button 
                        class="button is-warning is-large"
                        @click="createDestino(newDestino)">

                        <span class="icon">
                        <i class="fa fa-check"></i>
                        </span>
                        <span>Salvar</span>

                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },
  methods: mapActions([
    'createDestino'
  ]),
  computed: mapGetters({
    enderecos: 'passageiros'
  }),
  data () {
    return {
      newDestino: {
        destino: '',
        destinoVolta: '',
        idEmpresa: 1
      }
    }
  }
}
</script>
