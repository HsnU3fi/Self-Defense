<template>
  <section id="theme">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
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
                shaped
                :elevation="hover ? 10 : 4"
                :class="{ up: hover }"
            >
              <v-img
                  :src="feature.img"
                  max-width="100px"
                  height="100"
                  style="border-radius: 200px"
                  class="d-block ml-auto mr-auto"
                  :class="{ 'zoom-efect': hover }"
              >

              </v-img>
              <h1 class="font-weight-regular">{{ feature.title }}</h1>
              <h4 class="font-weight-regular subtitle-1">
                {{ feature.text }}
              </h4>
<!--              <v-card-actions>-->
<!--                <v-row-->
<!--                    align="center"-->
<!--                    justify="end"-->
<!--                >-->
<!--                  <v-col cols="12" sm="8" md-="4">-->
<!--                    <v-btn-->
<!--                        text-->
<!--                        color="deep-purple accent-4"-->
<!--                    >-->
<!--                      read More-->
<!--                    </v-btn>-->

<!--                  </v-col>-->

<!--                </v-row>-->
<!--                 </v-card-actions>-->


            </v-card>
          </v-hover>
        </v-col>

      </v-row>
    </v-container>
<!--<v-col cols="14" sm="8">-->

<!--</v-col>-->
<!--    <div class="svg-border-waves">-->
<!--      <img src="~@/assets/img/wave2.svg" />-->
<!--    </div>-->
<!--    <div class="svg-border-waves text-white">-->
<!--      <v-img src="~@/assets/img/borderWavesBlue.svg"/>-->
<!--    </div>-->

  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/spring.jpg"),
          title: "Theme yek",
          text: "yek yek yek",
          color:"green"
        },
        {
          img: require("@/assets/img/summer.jpeg"),
          title: "Theme do",
          text: "do do do",
          color: "#EC0E00"
        },
        {
          img: require("@/assets/img/fall.jpg"),
          title: "Theme se",
          text: "se se se",
          color: "orange"
        },
        {
          img: require("@/assets/img/winter.jpg"),
          title: "Theme chahar",
          text: "chahr chahar chahar ",
          color: "blue"
        },
      ],
    };
  }
}
</script>

<style lang="scss">
//.svg-border-waves .v-image {
//  position: absolute;
//  bottom: 0;
//  left: 0;
//  height: 3rem;
//  width: 100%;
//  overflow: hidden;
//}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      background-color: red;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#theme {
  z-index: 0;
  background-color: #f4f7f5;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-10px);
  transition: 0.5s ease-out;

}
</style>

<style>
section {
  position: relative;
}
</style>
