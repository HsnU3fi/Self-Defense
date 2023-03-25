<template>
  <v-container
      class="fill-height back"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-card class="elevation-20" style="border-radius: 10px ;" width="350">
          <div style="height: 80px; background-color: #171b34">
            <v-row style="margin-top: 30px" align="cenetr" justify="center">
              <span style="color: white; font-weight: bold; font-size: 30px">
              ورود
              </span>
            </v-row>
          </div>
<!--          <v-col-->
<!--              cols="12"-->
<!--              sm="4"-->
<!--              md="12"-->
<!--          >-->
            <div style="margin-top: 30px; margin-right: 30px" dir="rtl">
              <span style="color: black; font-weight: bold; font-size: 15px">
              نام کاربری
              </span>
            </div>
            <v-text-field
                style="margin-top: 10px; margin-left: 10px;margin-right: 10px"
                single-line
                outlined
                filled
                rounded
            ></v-text-field>
            <div style="margin-top: 10px; margin-right: 30px" dir="rtl">
              <span style="color: black; font-weight: bold; font-size: 15px">
              گذرواژه
              </span>
            </div>
            <v-text-field
                style="margin-top: 10px; margin-right: 10px; margin-left: 10px  "
                filled
                rounded
                single-line
                outlined
            ></v-text-field>
            <v-row align="center" justify="center">
              <v-btn
                  width="150"
                  height='40'
                  style="margin-top: 10px"
                  color="green"
                  rounded
                  dark
              >
                <span style="font-weight: bold">
                  تایید
                </span>
              </v-btn>
            </v-row>
            <v-row style="margin-top:80px">

            </v-row>
<!--          </v-col>-->
        </v-card>


      </v-col>
    </v-row>
  </v-container>
</template>
<style>

.back{
  background-image: url("~@/assets/img/gol.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;;

}
</style>

