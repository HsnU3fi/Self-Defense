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
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              outlined
              dark
              large
              v-bind="attrs"
              v-on="on"
          >
            {{ $t('lan') }}
          </v-btn>
        </template>
        <v-list width="80" height="100">
          <v-list-item

          >
            <a>
              <v-list-item-title @click="chooseLang('en')">
                <v-img src="@/assets/img/en.png"/>
              </v-list-item-title>
            </a>
          </v-list-item>
          <v-list-item

          >
            <a>
              <v-list-item-title @click="chooseLang('fa')">
                <v-img src="@/assets/img/ir.png"/>
              </v-list-item-title>
            </a>

          </v-list-item>
        </v-list>
      </v-menu>
      <v-app-bar-nav-icon

          @click.stop="drawer = !drawer"
          v-if="isXs"
      />
      <div v-else>


        <v-btn text @click="$vuetify.goTo('#theme')">
          <span class="mr-2" style="font-weight: bold">
            {{ $t('nav.videos') }}
          </span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2" style="font-weight: bold">{{ $t('nav.edu') }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2" style="font-weight: bold">{{ $t('nav.bio') }}</span>
        </v-btn>
        <v-btn rounded outlined @click="$vuetify.goTo('#call')">
          <span class="mr-2" style="font-weight: bold">{{ $t('nav.sign_up') }}</span>
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
    items1: [
      {title: 'EN'},
      {title: 'FA'},

    ],
    drawer: null,
    isXs: false,
    items: [
      ["mdi-account-check", "معرفی استاد مرادی", "#about"],
      ["mdi-check", "آموزش تخصصی کراوماگا", "#download"],
      ["mdi-video", "ویدیو ها", "#theme"],
      ["mdi-account-check", "ثبت نام", "#call"],
    ],

//     ["mdi-account-check", this.$i18n.t('nav.bio'), "#about"],
// ["mdi-check", this.$i18n.t('nav.edu'), "#download"],
//     ["mdi-video", this.$i18n.t('nav.videos'), "#theme"],
//     ["mdi-account-check", this.$i18n.t('nav.sign_up'), "#call"],
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
    },
    chooseLang(lang) {
      localStorage.setItem("locale", JSON.stringify(lang));
      location.reload()

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
