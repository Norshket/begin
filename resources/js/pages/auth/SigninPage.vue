<template>
  <div>
    <v-card>
      <v-card-title class="justify-center display-1 mb-2 pb-0 text-word-break-all">
      </v-card-title>
      <v-card flat class="text-center pa-1">
        <v-card-subtitle>Войдите в аккаунт</v-card-subtitle>

        <!-- sign in form -->
        <v-card-text>
          <v-form>
            <v-text-field v-model="firstName" :rules="rules" label="First name"></v-text-field>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>

</script>
