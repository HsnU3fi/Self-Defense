<template >

  <v-app>

    <navigation :color="color" :flat="flat"/>
    <v-main class="pt-0">
      <home/>
      <theme/>
      <lover/>
      <about/>


    </v-main>
    <v-scale-transition>
      <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          dark
          fixed
          bottom
          right
          color="secondary"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote/>
  </v-app>

</template>


<script>
  import home from "../components/HomeSection";
  import lover from "../components/LoverSection";
  import navigation from "../components/Navigation";
  import foote from "../components/Footer";
  import theme from "../components/ThemeSection";
  import about from "../components/AboutSection";


  export default {
    name: "App",
    components: {
      navigation,
      foote,
      lover,
      home,
      theme,
      about
    },

    data: () => ({
      fab: null,
      color: "",
      flat: null,
    }),

    created() {
      this.color = "rgba(0, 0, 0, 0.3)";
      const top = window.pageYOffset || 0;
      if (top <= 100) {
        this.flat = true;
      }
    },

    watch: {
      fab(value) {
        if (value) {
          this.color = "secondary";
          this.flat = false;
        } else {
          this.color = "rgba(0, 0, 0, 0.3)";
          this.flat = true;
        }
      },
    },

    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 30;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
</script>
