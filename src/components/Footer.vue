<template >
  <v-footer dark padless  >
    <v-card   tile class="secondary white--text text-center">
      <v-card-text>
<!--        <v-btn-->
<!--          v-for="(icon, i) in icons"-->
<!--          :key="i"-->
<!--          class="mx-4 white&#45;&#45;text"-->
<!--          :href="icon.link"-->
<!--          target="_blank"-->
<!--          icon-->
<!--        >-->
<!--          <v-icon size="24px">{{ icon.text }}</v-icon>-->
<!--        </v-btn>-->
      </v-card-text>
<v-row>
  <v-card-text class="white--text ">
    © <a style="text-decoration: none;font-size: 13px" target="_blank" >hassan.u3fi@gmail.com </a>   طراحی توسط
  </v-card-text>
  <v-card-text class="white--text pt-0">
     تمامی حقوقی محفوظ است
  </v-card-text>

</v-row>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}

</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-whatsapp",
        link: "",
      },

      {
        text: "mdi-instagram",
        link: "",
      },
    ],
  }),
};
</script>
