<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        color="#171b34"

    >
<!--      <v-list>-->
<!--        <v-list-item>-->
<!--          <v-list-item-avatar>-->
<!--            <v-img src="@/assets/img/hart.png" max-width="100px"/>-->
<!--          </v-list-item-avatar>-->
<!--          <v-list-item-content>-->

<!--            <v-list-item-title style="color: white;" class="title">LoverTime</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->

      <v-divider/>


    </v-navigation-drawer>
    <v-app-bar
        app
        :flat="flat"
        :color="color"
        dark
        class="px-15"
    >

<!--      <v-app-bar-nav-icon-->
<!--          @click.stop="drawer = !drawer"-->
<!--          class="mr-4"-->
<!--          v-if="isXs"-->
<!--      />-->
      <div >

        <v-btn left rounded outlined @click="Faq()">
          <v-icon class="mr-2">
            mdi-backburger
          </v-icon>
          <h1 class="mr-2" style="font-weight: bold">بازگشت</h1>
        </v-btn>

      </div>
    </v-app-bar>
  </div>

</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-account", "ورود", "/Faq"],
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
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    Faq(){
      window.location.replace('/')
    },

    Home(){
      window.location.replace('/')
    }
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
  },
};
</script>
