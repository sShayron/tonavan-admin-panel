<template>
    <section class="column widget">
        <section class="painel">
            <div class="container">
               <div class="columns">
                <div class="column is-10">
                    <h1 class="title">
                        Motoristas 
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
                            <label class="label">Motorista</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newMotorista.nome" placeholder="Nome do Motorista">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="columns">
                <div class="column is-12">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">CNH</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" v-model="newMotorista.cnh"  placeholder="Número da CNH (Carteira Nacional de Habilitação)">
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
                        @click="createMotorista(newMotorista)">

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
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'createMotorista'
  ]),
  data () {
    return {
      newMotorista: {
        cnh: '',
        nome: ''
      }
    }
  }
}
</script>
