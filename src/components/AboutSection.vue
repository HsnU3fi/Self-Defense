<template>
  <section id="about">
    <v-container fluid>

      <v-row justify="center" align="center" style="margin: 5px">
        <v-col cols="12" sm="8" class="black--text text-right">
          <v-row style="margin-bottom: 30px" justify="end" align="end">
            <h1 style="text-align: right; font-weight: bold;font-size: 30px;color: #171b34">استاد امیر مرادی</h1>
          </v-row>
          <v-row justify="center" align="center">
            <v-card

                class="elevation-8"
                height="350"
                width="350"
                style="border-radius: 10px;margin: 20px"

            >
              <v-img
                  alt="کراوماگا"
                  :src="features[0].img"
                  height="350"
                  class="d-block ml-auto mr-auto"
              >

              </v-img>
            </v-card>
            <v-card
                class="elevation-8"
                height="350"
                width="350"
                style="border-radius: 10px;margin: 20px"

            >
              <v-img
                  alt="کراوماگا"
                  :src="features[1].img"
                  height="350"
                  class="d-block ml-auto mr-auto"
              >

              </v-img>
            </v-card>
            <v-card
                class="elevation-8"
                height="350"
                width="350"
                style="border-radius: 10px;margin: 20px"

            >
              <v-img
                  alt="کراوماگا"
                  :src="features[2].img"
                  height="350"
                  class="d-block ml-auto mr-auto"
              >

              </v-img>
            </v-card>
          </v-row>

          <h1 style="font-size: 19px;font-weight: bold; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
            مدرس تربیت بدنی دانشگاه و دارای درجات دان5 کیک بوکسینگ wko، دان5 کاراته، دان4 ووشو، خان 11موی تای، دان3
            آیکیدو است </h1>
          <h1 style="font-size: 15px;margin-top: 15px;direction: rtl">
            استاد مرادی به منزله ی سوابق و تجارب طولانی مدت، تمامی رشته های فوق را مربی گری میکند
            همچنین وی سابقه داوری در عرصه کشوری و استانی کاراته و ووشو را در رزومه خود دارد.
          </h1>
          <h1 style="font-size: 15px;direction: rtl">
            او تنها مربی و مدرس سبک <a style="text-decoration: none; font-size: 20px;direction: rtl;" target="_blank"
                                       href="https://fa.wikipedia.org/wiki/%DA%A9%D8%B1%D8%A7%D9%88_%D9%85%D8%A7%DA%AF%D8%A7">کراوماگا</a>
            در
            ایران است
          </h1>
        </v-col>
      </v-row>

      <div style="height: 50px"/>
    </v-container>

  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

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
      features: [
        {
          img: require("@/assets/img/amir.png"),
        },
        {
          img: require("@/assets/img/amir3.png"),
        },
        {
          img: require("@/assets/img/amir2.png"),
        },
      ],
    }
  }
}
</script>
