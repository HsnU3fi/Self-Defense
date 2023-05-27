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

      <v-list>
        <v-list-item
            style="color: white"
            v-for="([icon, text, link], i) in items"
            :key="i"
            link
            @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-end">
            <v-icon style="color: white">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
                text
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        :flat="flat"
        :color="color"
        dark
        class="px-15"
    >
<!--      <v-img src="@/assets/img/hart.png" max-width="40px"/>-->

<!--      <v-toolbar-title style="font-weight: bold;  font-family: 'Gruppo';font-size: 30px;">-->
<!--        LoverTime-->
<!--      </v-toolbar-title>-->
      <v-spacer/>
      <v-app-bar-nav-icon

          @click.stop="drawer = !drawer"
          v-if="isXs"
      />
      <div v-else>


        <v-btn text @click="$vuetify.goTo('#theme')">
          <span class="mr-2" style="font-weight: bold">ویدیوها</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2" style="font-weight: bold">آموزش تخصصی کرواماگا</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2" style="font-weight: bold">معرفی استاد مرادی</span>
        </v-btn>
        <v-btn rounded outlined @click="$vuetify.goTo('#call')">
          <span class="mr-2" style="font-weight: bold">ثبت نام</span>
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
      ["mdi-account-check", "معرفی استاد مرادی", "#about"],
      ["mdi-check", "آموزش تخصصی کرواماگا", "#download"],
      ["mdi-video", "ویدیو ها", "#theme"],
      ["mdi-account-check", "ثبت نام", "#call"],
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
    Faq() {
      window.location.replace('/Faq')
    },
    Login() {
      window.location.replace('/Login')
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
