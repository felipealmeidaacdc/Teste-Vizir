<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-tile v-if="item.type === userType || userType === 'admin'" :key="item.text" @click="currentComponent = item.componentName">
            <v-list-tile-action>
              <v-icon color="purple darken-2">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down"></span>
         <v-avatar size="80px" tile>
          <img
            src="../assets/logo_telzir.png"
            alt="Telzir"
          >
        </v-avatar>
      </v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-tooltip bottom>
        <v-btn icon slot="activator" @click="() => { userType = 'user'; currentComponent = 'AppFaleMais'}">
            <v-icon>widgets</v-icon>
        </v-btn>
        <span>
            User 
        </span>
      </v-tooltip>
    
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <component :is="currentComponent" v-bind="currentProps"></component>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import AppFaleMais from '@/components/AppFaleMais'
export default {
  components: {
    AppFaleMais,
 
  },
  data: () => ({
    currentComponent: 'AppFaleMais',
    userType: 'user',
    dialog: false,
    drawer: null,
    items: [
      { icon: 'dialpad', text: 'FaleMais-Vizir', componentName: 'AppFaleMais', type: 'user' }
    ]
  }),
  computed: {
    ...mapState({
      plans: state => state.plans,
      loadingPlanos: state => state.loadingPlanos,
      costs: state => state.costs,
      loadingDdds: state => state.loadingDdds,
      alerta: state => state.alerta
    }),
    currentProps () {
      if (this.currentComponent === 'AppFaleMais') {
        return {
          plans: this.plans,
          costs: this.costs
        }
      } 
    }
  },
  props: {
    source: String
  }
}
</script>
