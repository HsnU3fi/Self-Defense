<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        color="#171b34"

    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="@/assets/img/hart.png" max-width="100px"/>
          </v-list-item-avatar>
          <v-list-item-content>

            <v-list-item-title style="color: white;" class="title">LoverTime</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

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
      <v-img src="@/assets/img/hart.png" max-width="40px"/>

      <v-toolbar-title style="font-weight: bold;  font-family: 'Gruppo';font-size: 30px;">
        LoverTime
      </v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-4"
          v-if="isXs"
      />
      <div v-else>

        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2" style="font-weight: bold">درباره ما</span>
        </v-btn>

        <v-btn text @click="Faq()">
          <span class="mr-2" style="font-weight: bold">سوالات متداول</span>
        </v-btn>

        <v-btn text @click="$vuetify.goTo('')">
          <span class="mr-2" style="font-weight: bold">بلاگ</span>
        </v-btn>

        <v-btn text @click="$vuetify.goTo('#theme')">
          <span class="mr-2" style="font-weight: bold">تم ها</span>
        </v-btn>
        <v-btn text @click="Home()">
          <span class="mr-2" style="font-weight: bold">خانه</span>
        </v-btn>

        <v-btn rounded outlined @click="$vuetify.goTo('')">
          <span class="mr-2" style="font-weight: bold">ورود</span>
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
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    Faq(){
      window.location.replace('/Faq')
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
