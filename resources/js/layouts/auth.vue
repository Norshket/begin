<template>
  <v-container
    class="auth-body fill-height"
    fluid
  >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <div class="layout-content">
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters } from 'vuex'

// export default {
//   computed: {
//     ...mapGetters({
//       settings: 'settings/settings'
//     }),

//     background: function () {
//       if (typeof this.settings.image_background === 'object' && this.settings.image_background !== null) {
//         return this.settings.image_background.url
//       } else if (typeof this.settings.image_background === 'string') {
//         return this.settings.image_background
//       }
//       return ''
//     }
//   }
// }
</script>

<style scoped>
.auth-body {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.layout-content {
  width: 480px;
  max-width: 100%;
}
</style>
