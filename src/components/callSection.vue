<template>
  <section id="call">
        <v-row style="margin-top: 30px" justify="center" align="center">

        <h2  style="font-size:25px; font-weight: bold;direction: rtl;margin: 30px">
          جهت ثبت نام و چگونگی برگزاری کلاس های آموزش ورزش های رزمی و دفاع شخصی از طریق راه های زیر با ما در ارتباط باشید
        </h2>
        </v-row>

        <v-row style="  margin-bottom: 60px;margin: 10px" align="center" justify="center">
          <v-col
              cols="12"
              sm="3"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
          >
            <v-hover v-slot:default="{ hover }" >
              <v-card
                  class="card"
                  height="250"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
              >
                <v-img
                    alt="کراوماگا"
                    :src="feature.img"
                    max-width="100px"
                    height="100"
                    style="border-radius: 200px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                >

                </v-img>
                <v-row align="center" justify="center">
                  <v-col cols="10">
                    <h1 class="font-weight-regular" style="font-size: 15px">{{ feature.title }}</h1>
                    <h4 class="font-weight-regular subtitle-1">
                      {{ feature.text }}
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

  </section>
</template>

<style scoped>
#call {
  background-color: #f4f7f5;
}



#download .container,
#download .row {
  height: 100%;
}
</style>

<script>


export default {


  data() {
    return {
      fab: null,
      color: "",
      flat: null,
      features: [
        {
          img: require("@/assets/img/mobile.jpeg"),
          title: ": شماره تماس ",
          text: "09378622812-09192066395",
          color:"green"
        },
        {
          img: require("@/assets/img/chat1.png"),
          title: ":تلگرام و واتساپ",
          text: "09378622812",
          color: "#EC0E00"
        },
        {
          img: require("@/assets/img/email.png"),
          title: ":ایمیل",
          text: "amir.moradi.taemeh@gmail.com",
          color: "orange"
        },
        {
          img: require("@/assets/img/insta.jpg"),
          title: ": آی دی اینستاگرام",
          text: "amir.moradi.taemeh",
          color: "orange"
        },

      ],
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