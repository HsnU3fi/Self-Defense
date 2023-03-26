<template>
  <section v-if="isXs"  id="res-mobile">
    <v-container fluid>
      <v-row style="margin-top: 120px"  align="center" justify="center">
        <v-col cols="10">
          <v-row  align="center" justify="center">
            <v-col sm="4" >
              <!--              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />-->
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-right">
              <h1 style="font-size: 18px;" class=" mb-4">آموزش دفاع شخصی و انواع هنرهای رزمی</h1>
              <h1 class="mb-2" style="font-size: 15px;margin-top: 120px">
                آموزش خصوصی و عمومی کراوماگا, کیک بوکسینگ, کاراته, موتای و آیکیدو در تمام سنین برای آقایان و بانوان تحت نظر  <span style="font-size:18px "> استاد امیر مرادی</span>
              </h1>
              <v-btn rounded outlined  @click="Faq()" large color="white" class="mt-10">
                <v-icon class="mr-2">
                  mdi-account-circle
                </v-icon>
                <h1>
                  ثبت نام
                </h1>
              </v-btn>
            </v-col>
          </v-row >
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section v-else  id="home">
      <v-row style="margin-top: -150px;margin-right: -50px"  align="center" justify="center">
        <v-col cols="10">
          <v-row  align="center" justify="center">
            <v-col sm="4" >
              <!--              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />-->
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-right">
              <h1 style="font-size: 35px;" class=" mb-4">آموزش دفاع شخصی و انواع هنرهای رزمی</h1>
              <h1 style="font-size: 15px">
                آموزش خصوصی و عمومی کراوماگا, کیک بوکسینگ, کاراته, موتای و آیکیدو در تمام سنین برای آقایان و بانوان تحت نظر  <span style="font-size:20px "> استاد امیر مرادی</span>
              </h1>
              <v-btn rounded outlined @click="Faq()" large color="white" class="mt-10">
                <v-icon class="mr-2">
                  mdi-account-circle
                </v-icon>
                <h1>
                  ثبت نام
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
  height: 20%;

}


#home .container,
#home .row {
  height: 100%;
}
</style>
<script>
export default {
  data: () => ({
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
  },
};
</script>
