<template>
    <v-card>
      <v-card-title class="justify-center display-1 mb-2 pb-0 text-word-break-all bg-primary">
        <p class="text-center">BEGIN</p>
      </v-card-title>

      <v-card-subtitle>{{ $t('login_page.title') }}</v-card-subtitle>

      <!-- sign in form -->
      <v-card-text class="text-center">
        <v-form @submit.prevent="submit">

          <v-text-field 
            v-model.trim="email"
            :validate-on-blur="false" 
            :label="$t('login_page.email')" outlined
            placeholder=" " 
            persistent-placeholder
            required 
            :error-messages="form.errors.get('email')"
           />

          <v-text-field 
            v-model="password" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            placeholder=" " 
            persistent-placeholder 
            required
            :label="$t('login_page.password')"
            outlined
            :error-messages="form.errors.get('password')"
            @click:append="showPassword = !showPassword" 
          />

          <v-checkbox 
            v-model="remember" 
            name="remember" 
            :label="$t('remember_me')" 
            class="mt-1" 
          />

          <div class="mt-4">
            <v-btn type="submit" color="primary" block x-large :loading="form.busy">
              {{ $t('login_page.button') }}
            </v-btn>
          </div>

        </v-form>

        <v-row class="mt-5">

          <v-col>
            <router-link :to="{ name: 'register' }">
              {{ $t('login_page.register') }}
            </router-link>
          </v-col>

          <v-col>
            <router-link :to="{ name: 'register' }">
              {{ $t('login_page.forgot') }}
            </router-link>
          </v-col>

        </v-row>

      </v-card-text>
    </v-card>
</template>

<script>
import Form from 'vform'

export default {

  data() {
    return {
      form: new Form({
        email: '',
        password: '',
        remember: false
      }),

      remember: false,
      email: '',
      password: '',
      showPassword: false
    }
  },

  methods: {
    submit() {
      this.form = new Form({
        email: this.email,
        password: this.password,
        remember: this.remember
      })

      this.form.post(this.$api.auth.url.login())
    },
  }
}

</script>
