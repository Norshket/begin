<template>
  <v-app>
    <router-view name="wrapper">
      <v-fade-transition mode="out-in">
        <component :is="currentLayout">
          <router-view></router-view>
        </component>
      </v-fade-transition>
    </router-view>
  </v-app>
</template>


<script>

import DefaultLayout from '../layouts/default.vue'
import AuthLayout from '../layouts/auth.vue'
import CrmLayout from '../layouts/crm.vue'

export default {
  name: 'app',
  components: {
    DefaultLayout,
    AuthLayout,
    CrmLayout
  },

  computed: {
    isRouterLoaded: function () {
      return this.$route.name !== null
    },

    currentLayout: function () {
      const layout = this.$route.matched.slice().reverse().find(route => route.meta.layout)?.meta.layout || 'default'
      return layout + '-layout'
    },
  },

}

</script>

