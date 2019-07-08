<template>
    <v-card flat>
        <v-card-title class="red darken-1 white--text">Fale Mais</v-card-title>
        <v-card-text>
          <v-layout style="margin-top: 20px;">
            <v-flex offset-md1 md10>
              <p class="text-xs-center">Para calcular, basta selecionar o DDD de Origem e Destino e a quantidade de minutos da ligação</p>
              <v-layout row wrap>
                <v-flex md4 xs12 style="padding: 10px;">
                  <v-select
                    :items="costs"
                    item-text="source_code"
                    item-value="source_code"
                    label="DDD de Origem"
                    no-data-text="Nenhum DDD de Origem Cadastrado"
                    browser-autocomplete="false"
                    v-model="source_code"
                    @input="debounceCalcula"
                  >
                  </v-select>
                </v-flex>

                <v-flex md4 xs12 style="padding: 10px;">
                  <v-select
                    :items="dddsDeDestino"
                    item-text="target_code"
                    return-object
                    no-data-text="Selecione um DDD de Origem"
                    label="DDD de Destino"
                    v-model="target_code"
                    @input="debounceCalcula"
                  >
                  </v-select>
                </v-flex>

                <v-flex md4 xs12 style="padding: 10px;">
                  <v-text-field
                    v-model="qtdMinutos"
                    label="Digite a quantidade de minutos"
                    @input="debounceCalcula"
                  ></v-text-field>
                </v-flex>

              </v-layout>
              <v-layout row wrap justify-center v-if="loadingCalculadora">
                <v-progress-circular indeterminate color="green" size="50"></v-progress-circular>
              </v-layout>
              <v-layout v-else-if="resultado.length > 0">
                <v-flex>
                  <v-data-table
                    :headers="headers"
                    :items="resultado"
                    hide-actions
                    class="corDoHeader elevation-1"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-left">{{props.item.namePlan}}</td>
                      <td class="text-xs-center">{{props.item.valuewithPlan}}</td>
                      <td class="text-xs-center">{{props.item.valuewithoutPlan}}</td>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'
import _debounce from 'lodash.debounce'
import axios from 'axios'

export default {
  props: {
    plans: {
      type: Array,
      required: true
    },
    costs: {
      type: Array,
      required: true
    }
  },
  computed: {
    dddsDeDestino () {
      if (this.source_code != '') return this.$store.getters.getDddsDeDestino(this.source_code)
    }
  },
  data () {
    return {
      loadingCalculadora: false,
      qtdMinutos: '',
      target_code: '',
      source_code: '',
      idDoPlanoSelecionado: '',
      botaoSelecionado: '',
      resultado: [],
      headers: [
        { text: 'Plano', value: 'namePlan', align: 'left', sortable: true },
        { text: ' Com FaleMais', value: 'valuewithPlan', align: 'center', sortable: true },
        { text: ' Sem FaleMais', value: 'valuewithoutPlan', align: 'center', sortable: true }
      ]
    }
  },
  methods: {
    debounceCalcula: _debounce(function () {
      console.log('chamou debounce')
      this.calcula()
    }, 1500),
    calcula () {
      if (this.source_code == '' || this.target_code == '' || this.qtdMinutos == '') return
      
     
      this.loadingCalculadora = true
      axios({
        url: 'http://localhost:3000/plans/calcula',
        method: 'post',
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          cost: this.target_code,
          min: this.qtdMinutos
        })
      }).then(response => {
        this.resultado = response.data
        this.loadingCalculadora = false
      })
    }
  },
  created () {
    this.$store.dispatch('set', {
      item: 'plans',
      servico: 'plans',
      loading: 'loadingPlans'
    })
    this.$store.dispatch('set', {
      item: 'costs',
      servico: 'costs',
      loading: 'loadingCosts'
    })
  }
}
</script>

<style scoped>
.corDoHeader >>> thead {
  background: #FF0000;
}

.corDoHeader >>> th {
  color: rgb(255, 255, 255) !important;
}

.corDoHeader >>> th i {
  color: rgb(255, 255, 255) !important;
}
</style>
