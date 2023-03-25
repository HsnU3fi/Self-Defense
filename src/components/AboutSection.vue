<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="5" class="d-none d-md-flex">
<!--              <v-img-->
<!--                  src="@/assets/img/turban-removebg-preview.png"-->
<!--                  class="d-block ml-auto mr-auto"-->
<!--                  max-width="300px"-->
<!--              />-->
            </v-col>

            <v-col cols="12" md="7">
              <h1 style="text-align: right; font-weight: bold;font-size: 30px">درباره ما</h1>
              <h1 class=" display-1 mb-3" style="text-align: right;margin-top: 20px">

              </h1>
<!--              <v-row  align="end">-->
<!--                <v-col cols="12" class="d-flex justify-end">-->

<!--                  <p class="text-justify">-->
<!--                    سلام سلام-->
<!--                  ای زندگی سلام-->
<!--                  </p>-->
<!--                  <v-img-->
<!--                      src="@/assets/img/logo.png"-->
<!--                      max-width="60px"-->
<!--                      class="mr-4"-->
<!--                  />-->
<!--                </v-col>-->
<!--                <v-col cols="12" class="d-flex justify-end">-->

<!--                  <p >-->
<!--                    مستی هم درد منو دیگ دوا نمیکنه-->
<!--                  </p>-->
<!--                  <v-img-->
<!--                      src="@/assets/img/logo.png"-->
<!--                      max-width="60px"-->
<!--                      class="mr-4"-->
<!--                  />-->
<!--                </v-col>-->
<!--              </v-row>-->
            </v-col>

          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
  </section>
</template>

<style scoped>
#about {
  height: 500px;
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
