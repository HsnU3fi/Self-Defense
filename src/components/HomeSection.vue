<template>
  <section id="hero">
    <v-container  fluid id="features"  >
      <v-row align="center" justify="center">
            <v-carousel
                cycle
                height="90vh"
                hide-delimiter-background
                :show-arrows="true"
            >
              <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide.src"

              >

              </v-carousel-item>
            </v-carousel>

      </v-row>
    </v-container>

  </section>
</template>

<script>
import img1 from '/src/assets/img/weddingrings.jpg'
import img2 from '/src/assets/img/wed3.jpg'
import img3 from '/src/assets/img/wed1.jpg'
export default {

  data() {
    return {
      colors: [
        '#7B7B7B',
        '#7B7B7B',
        '#7B7B7B',
        '#7B7B7B',
        '#7B7B7B',
      ],
      slides: [
        {
          src: img1,
        },
        {
          src: img2,
        },
        {
          src: img3,
        },
      ],
    };
  }
}
</script>

<style lang="scss">
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
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
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
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
  min-height: 400px;
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
