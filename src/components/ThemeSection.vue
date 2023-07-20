<template>
  <section id="theme">
    <v-container class="fill-height" fluid>

      <v-row align="center" justify="center">

        <v-col
            cols="12"
            sm="8"
            class="text-center"
        >
          <v-row style="margin-bottom: 30px;margin-right: 10px" justify="end" align="end">
            <h1 style="text-align: right; font-weight: bold;font-size: 30px;color: #171b34">ویدیو ها</h1>
          </v-row>

          <v-row justify="center" align="center">

            <v-card style="margin: 20px" elevation="10" rounded height="400" color="secondary">
              <video  height="400" width="350" controls :src="features[0].img"></video>
            </v-card>

            <v-card style="margin: 20px" elevation="10" rounded height="400" color="secondary">
              <video  height="400" width="350" controls :src="features[1].img"></video>
            </v-card>

            <v-card style="margin: 20px" elevation="10" rounded height="400" color="secondary">
              <video  height="400" width="350" controls :src="features[2].img"></video>
            </v-card>
          </v-row>


        </v-col>

      </v-row>

    </v-container>
    <!--    <div style="height: 300px"/>-->

    <!--    <div class="svg-border-waves text-white" >-->
    <!--      <v-img src="~@/assets/img/borderWavesBlue.svg"/>-->
    <!--    </div>-->
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

      colors: [
        'green',
        'secondary',
        'yellow darken-4',

      ],


      features: [
        {
          img: require("@/assets/img/111.mp4"),
        },
        {
          img: require("@/assets/img/222.mp4"),
        },
        {
          img: require("@/assets/img/333.mp4"),
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
