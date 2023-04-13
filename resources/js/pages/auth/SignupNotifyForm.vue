<template>
  <v-card>
    <v-card-title>
      Спасибо за регистрацию!
    </v-card-title>
    <v-card-text>
      Ссылка для подтверждения была отправлена на Ваш email-адрес.
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('cancel')">
        Ок
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SignupNotifyForm'
}
</script>
