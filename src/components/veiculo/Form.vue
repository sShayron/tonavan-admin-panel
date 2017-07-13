<template>
  <section class="column widget">
    <section class="painel">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
              <h1 class="title">
                  Veículos 
              </h1>
          </div>

          <div class="column is-6 has-text-right">
              <a href="#/veiculo/list" class="button is-medium">
                  <span class="icon">
                  <i class="fa fa-arrow-left"></i>
                  </span>
                  <span>voltar</span>
              </a>
          </div>
        </div>
      </div>
      <hr>
    </section>
    <div class="">
        <div class="columns">
            <!-- <div class="column">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Descrição</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Sprinter 313 Cdi 2008 Executiva Mercedes Benz">
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

          <div class="column is-12">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Placa</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="AAA-1234" v-model="newVeiculo.numeroPlaca">
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
              <label class="label">Quantidade de vagas</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="" v-model="newVeiculo.numeroVagas">
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
              @click="createVeiculo(newVeiculo)">

              <span class="icon">
              <i class="fa fa-check"></i>
              </span>
              <span>Salvar</span>

            </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  // this.$store.dispatch(nameAction, arg1) ?.then(() => this.router.push())
  methods: mapActions([
    'createVeiculo'
  ]),
  data () {
    return {
      newVeiculo: {
        numeroPlaca: '',
        numeroVagas: 0
      }
    }
  }
}
</script>
