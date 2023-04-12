<template>
  <div>
    <v-card>
      <v-card-title class="justify-center display-1 mb-2 pb-0 text-word-break-all bg-primary">
        <p class="text-center">BEGIN</p>
      </v-card-title>
      <v-card flat class="text-center pa-1">
        <v-card-subtitle>{{ $t('login_page.title') }}</v-card-subtitle>

        <!-- sign in form -->
        <v-card-text>
          <v-form @submit.prevent="loginMethod">

            <v-text-field
              v-model.trim="email"
              :validate-on-blur="false"
              :label="$t('login_page.email')"
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
              <v-btn
                type="submit"
                color="primary"
                block
                x-large
                :loading="form.busy"
              >
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
    </v-card>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'

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
      showPassword:false
    }
  },

  methods:{
     loginMethod () {
      // this.form = new Form({
      //   email: this.email,
      //   password: this.password,
      //   remember: this.remember
      // })        

      const data = {
        email: this.email,
        password: this.password,
        remember: this.remember
      }

      // console.log(this.$api.auth, this.$api.auth.url.login());

      axios.post( this.$api.auth.url.login(), data).then((value) => {
        console.log(value);
      })
      // this.$api.auth.login(data).then(value => {
      //   console.log(value);
      // }).catch((err) => {
      //   console.log(err);
      // });


      // if (this.redirectGate) {
      //   await this.afterLogin(data)
      // }
    },
  }
}

</script>
