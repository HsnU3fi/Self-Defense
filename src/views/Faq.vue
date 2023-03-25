<template>
  <v-app>
    <headerPages :color="color" :flat="flat"/>


    <v-content>
      <v-container fluid>
        <v-row style="margin-top: 30px" justify="center" align="center">

        <span style="font-size:30px; font-weight: bold">
          سوالات متداول
          <v-divider/>
        </span>
        </v-row>

        <v-row style="margin-top: 20px" align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-expansion-panels popout focusable>
                <v-expansion-panel
                    v-for="(myItems,i) in 4"
                    :key="i"
                >
                  <v-expansion-panel-header expand-icon="mdi-menu-down">question</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-row style="margin-top: 50px"/>
    <foote/>

  </v-app>

</template>

<script>
import foote from "../components/Footer";
import headerPages from "../components/Header";

import VueFaqAccordion from 'vue-faq-accordion'

export default {
  components: {
    VueFaqAccordion,
    foote,
    headerPages
  },

  data() {
    return {
      fab: null,
      color: "",
      flat: null,
      myItems: [
        {
          title: 'Aya sagha ziyad shodan?',
          value: 'bale bale khyli shodan motasefaen',
          category: 'Dogs'
        },
        {
          title: 'chand adad sag vojod darad?',
          value: 'motasefane shomaresheh shomaresh az dast rafte',
          category: 'Dogs'
        },
        {
          title: 'aya catha ham ziyad shodan?',
          value: 'faghad dar parse.',
          category: 'Cats'
        }
      ]
    }
  },
  created() {
    this.color = "secondary";
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

  }
}
</script>
