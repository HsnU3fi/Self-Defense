<template>
  <section v-if="isXs" id="res-mobile">
    <v-container fluid>
      <v-row style="margin-top: 120px" align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4">
              <!--              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />-->
            </v-col>
            <v-col  cols="12" sm="8" class="white--text text-left ">
              <h1 style="font-size: 18px;margin-right: -12px;margin-top: 12px">{{ $t('title1') }}</h1>
              <h1 class="mb-2" style="font-size: 15px;margin-top: 130px;margin-right: -12px">
                {{ $t('title2') }}<h2 style="font-size:17px "> {{ $t('name') }}</h2>
              </h1>
              <v-btn rounded @click="$vuetify.goTo('#call')" large color="secondary" class="mt-10">
                <v-icon class="mr-2">
                  mdi-account-circle
                </v-icon>
                <h1>
                  {{ $t('sign_up') }}
                </h1>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section v-else id="home">
    <v-row style="margin-top: -150px;margin-right: -50px" align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col sm="4">
            <!--              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />-->
          </v-col>
          <v-col id="element" cols="12" sm="8" class="white--text ">
            <h1 style="font-size: 35px;" class="mb-4">{{ $t('title1') }}</h1>
            <h1 style="font-size: 15px">
              {{ $t('title2') }}
              <h2 style="font-size:20px "> {{ $t('name') }}</h2>
            </h1>
            <v-btn rounded elevation="10" @click="$vuetify.goTo('#call')" large color="secondary" class="mt-10">
              <v-icon class="mr-2">
                mdi-account-circle
              </v-icon>
              <h1>
                {{ $t('sign_up') }}
              </h1>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>

</template>

<style scoped>
#home {
  background-image: url("~@/assets/img/box.jpg");
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 850px

}

#res-mobile {
  background-image: url("~@/assets/img/box2.jpg");
  /*background-attachment: fixed ;*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;

}


#home .container,
#home .row {
  height: 100%;
}
</style>
<script>
// import {useI18n} from 'vue-i18n'

export default {

  data: () => ({
    // t : useI18n(),
    drawer: null,
    isXs: false,
    items: [
      ["mdi-account", "ورود", ""],
      ["mdi-home-outline", "خانه", "#hero"],
      ["mdi-download-box-outline", "تم ها", "#download"],
      ["mdi-book", "بلاگ", "#pricing"],
      ["mdi-book", "سوالات متداول", "/Faq"],
      ["mdi-information-outline", "درباره ما", "#features"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    Faq() {
      window.location.replace('/Faq')
    },
    onResize() {
      this.isXs = window.innerWidth < 599;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, {passive: true});
    var locale = JSON.parse(localStorage.getItem("locale")) || "fa";
    var element = document.getElementById('element');
    if (locale === "en") {
      element.classList.remove('text-right');
      element.classList.add('text-left');
    } else {
      element.classList.remove('text-left');
      element.classList.add('text-right');
    }
  },
};
</script>
