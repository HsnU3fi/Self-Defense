<template>
  <section id="about">
    <v-container fluid>
      <v-row style="margin: 30px" justify="end" align="end">
        <h1 style="text-align: right; font-weight: bold;font-size: 30px;color: #171b34">استاد امیر مرادی</h1>
      </v-row>


      <v-row justify="center" align="center" >
        <v-row align="center" justify="center">
          <v-col
              cols="12"
              sm="3"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
          >
              <v-card
                  class="elevation-8"
                  height="350"
                  style="border-radius: 10px;"

              >
                <v-img
                    :src="feature.img"
                     height="350"
                     class="d-block ml-auto mr-auto"
                >

                </v-img>
              </v-card>
          </v-col>
        </v-row>
<!--        <v-img src="@/assets/img/amir.png"  class="d-block ml-auto mr-auto elevation-15"  style="border-radius: 15px;margin: 10px"  max-width="500px" height="300"/>-->
<!--        <v-img src="@/assets/img/amir3.png" class="d-block ml-auto mr-auto elevation-15" style="border-radius: 15px;margin: 10px" max-width="500px" height="300"/>-->
<!--        <v-img src="@/assets/img/amir2.png" class="d-block ml-auto mr-auto elevation-15" style="border-radius: 15px;margin: 10px" max-width="500px" height="300"/>-->

        <v-col cols="12" sm="8" class="black--text text-right">
          <h1 style="font-size: 19px;font-weight: bold; direction: rtl;margin-bottom: 10px;padding-top: 30px">
            مدرس تربیت بدنی دانشگاه و دارای درجات دان5 کیگ بکسینگ wko, دان5 کاراته, دان4 ووشو, خان 11موی تای, دان3
            آیکیدو است
          </h1>
          <h1 style="font-size: 15px;margin-top: 15px">
            استاد مرادی به منزله ی سوابق و تجارب طولانی مدت, تمامی رشته های فوق را مربی گری میکند
            همچنین وی سابقه داوری در عرصه کشوری و استانی کاراته و ووشو را در رزومه خود دارد
          </h1>
          <h1 style="font-size: 15px">
            او تنها مربی و مدرس سبک <a style="text-decoration: none; font-size: 20px;
" href="https://fa.wikipedia.org/wiki/%DA%A9%D8%B1%D8%A7%D9%88_%D9%85%D8%A7%DA%AF%D8%A7" target="_blank">کراوماگا</a> در
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
