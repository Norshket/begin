<template>
  <div>
    <v-card>
      <v-card-title class="justify-center display-1 mb-2 pb-0 text-word-break-all bg-primary">
        <p class="text-center">BEGIN</p>
      </v-card-title>
      <v-card flat class="text-center pa-1">
        <v-card-subtitle>{{ $t('register_page.title') }}</v-card-subtitle>

        <!-- sign in form -->
        <v-card-text>
          <v-form>


            <v-text-field
              v-model.trim="name"
              :validate-on-blur="false"
              :label="$t('register_page.name')"
              outlined
              placeholder=" "
              persistent-placeholder
              required
              :error-messages="form.errors.get('name')"
            />


            <v-text-field
              v-model.trim="email"
              :validate-on-blur="false"
              :label="$t('register_page.email')"
              outlined
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
              :label="$t('register_page.password')"
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
          <div  class="mt-5" >
            <router-link  :to="{ name: 'login' }">
              {{ $t('register_page.agree') }}
            </router-link>
          </div>
          <div  class="mt-5" >
            <router-link :to="{ name: 'login' }">
              {{ $t('register_page.account') }}
            </router-link>
          </div>
        

        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import Form from 'vform'
export default {

  data() {
    return {
      form: new Form({
        email: '',
        password: '',
        name: '',
      }),
      
      
      email: '',
      name: '',
      password: '',

      showPassword:false
    }
  }
}

</script>
