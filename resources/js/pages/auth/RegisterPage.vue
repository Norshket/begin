<template>
  <v-card>
    <v-card-title class="justify-center display-1 mb-2 pb-0 text-word-break-all bg-primary">
      <p class="text-center">BEGIN</p>
    </v-card-title>
    <v-card-subtitle>{{ $t('register_page.title') }}</v-card-subtitle>

    <!-- sign in form -->
    <v-card-text class="text-center">
      <v-form @submit.prevent="submit">
        <v-text-field 
          v-model.trim="name" 
          :validate-on-blur="false" 
          :label="$t('register_page.name')" 
          outlined
          placeholder=" " 
          persistent-placeholder 
          required 
          :error-messages="form.errors.get('name')" />


        <v-text-field 
          v-model.trim="email" 
          :validate-on-blur="false" 
          :label="$t('register_page.email')" 
          outlined
          placeholder=" " 
          persistent-placeholder
          required 
          :error-messages="form.errors.get('email')" />

        <v-text-field 
          v-model="password" 
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"         
          :type="showPassword ? 'text' : 'password'" 
          placeholder=" " 
          persistent-placeholder
          required          
          :label="$t('register_page.password')" 
          outlined 
          :error-messages="form.errors.get('password')"
          @click:append="showPassword = !showPassword" 
        />

        <v-text-field 
          v-model="password_confirmation"
          :type="showPassword ? 'text' : 'password'"
          :error-messages="form.errors.get(`password_confirmation`)"
          :label="$t('register_page.password_confirmation') + '*'"
          outlined
          dense
         />


        <div class="mt-4">
          <v-btn 
            type="submit" 
            color="primary" 
            block
            x-large 
            :loading="form.busy"
          >
            {{ $t('register_page.button') }}
          </v-btn>
        </div>

      </v-form>
      <div class="mt-5">
        <router-link :to="{ name: 'login' }">
          {{ $t('register_page.agree') }}
        </router-link>
      </div>
      <div class="mt-5">
        <router-link :to="{ name: 'login' }">
          {{ $t('register_page.account') }}
        </router-link>
      </div>
    </v-card-text>

    <v-dialog
      v-model="formDialog"
      max-width="500"
      scrollable persistent
    >
      <signup-notify-form
        v-if="formDialog" 
        @cancel="cancel()" 
      />
    </v-dialog>

  </v-card>
</template>

<script>
import Form from 'vform'
import SignupNotifyForm from './SignupNotifyForm.vue'

export default {

  components:{
    SignupNotifyForm
  },

  data() {
    return {
      form: new Form({
        email: '',
        password: '',
        name: '',
        password_confirmation: '',
      }),


      email: '',
      name: '',
      password: '',
      password_confirmation: '',
      showPassword: false,

      formDialog: false,
    }
  },

  methods: {
    submit() {
      this.form = new Form({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });

      this.form.post(this.$api.auth.url.register()).then((value) => {
        this.formDialog = true
      })
    },

    cancel() {
      this.formDialog = false
      this.$router.push({ name: 'login' })
    }
  }
}

</script>
