<template>
  <section id="download">


    <v-row justify="center" align="center" style="margin: 5px">
      <v-col id="element1" cols="12" sm="8" class="black--text  ">
        <v-row style="margin-bottom: 30px;margin-right: 10px; " justify="end" align="end">
          <h1 style="text-align: left; font-weight: bold;font-size: 30px;color: #171b34;">{{ $t('edu.title') }}</h1>
        </v-row>

        <v-img alt="کراوماگا" src="@/assets/img/krav1.jpeg" class="d-block ml-auto mr-auto elevation-15"
               style="border-radius: 15px;margin: 10px" max-width="500px" height="300"/>

        <h1 style="font-size: 19px; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
          {{ $t('edu.text1') }}
        </h1>
        <h1 style="font-size: 19px;margin-top: 15px;direction: rtl">
          {{ $t('edu.text2') }}
        </h1>
        <h1 style="font-size: 19px;margin-top: 15px;direction: rtl">
          {{ $t('edu.text3') }}
        </h1>
        <h1 style="font-size: 19px;margin-top: 15px;direction: rtl">
          {{ $t('edu.text4') }}
        </h1>
        <v-row style="margin-bottom: 15px;margin-top: 20px;margin-right: 5px" justify="end" align="end">
          <h1 style="text-align: right; font-weight: bold;font-size: 28px;color: #171b34"> {{ $t('edu.text5') }}
          </h1>
        </v-row>
        <h1 style="font-size: 19px;margin-top: 15px;direction: ltr">
          {{ $t('edu.text6') }} </h1>

        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text7') }} </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text8') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text9') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text10') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text11') }}
        </h1>

        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text12') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text13') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px">
          {{ $t('edu.text14') }}
        </h1>
        <h1 style="text-align: right;font-size: 19px;direction: rtl">
          {{ $t('edu.text15') }}
        </h1>
        <v-img alt="کراوماگا" src="@/assets/img/krav-maga-1.jpg" class="d-block ml-auto mr-auto elevation-15"
               style="border-radius: 15px;margin: 10px" max-width="500px" height="300"/>
        <h1 style=";font-size: 19px;direction: rtl">
          {{ $t('edu.text16') }}

        </h1>
        <h1 style=";font-size: 19px;direction: rtl">
          {{ $t('edu.text17') }}
        </h1>
        <h1 style="font-size: 19px;direction: rtl">
          {{ $t('edu.text18') }}
        </h1>
        <v-img alt="کراوماگا" src="@/assets/img/krav-maga-2.jpg" class="d-block ml-auto mr-auto elevation-15"
               style="border-radius: 15px;margin: 20px" max-width="500px" height="300"/>


        <v-row style="margin-bottom: 10px;margin-top: 25px;margin-right: 5px" justify="end" align="end">
          <h1 style="text-align: right; font-weight: bold;font-size: 28px;color: #171b34">
            {{ $t('edu.text19') }}
          </h1>
        </v-row>
        <h1 style="font-size: 19px; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
          {{ $t('edu.text20') }}
        </h1>
        <h1 style="font-size: 19px; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
          {{ $t('edu.text21') }}
        </h1>
        <h1 style="font-size: 19px; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
          {{ $t('edu.text22') }}
        </h1>
        <v-img alt="کراوماگا" src="@/assets/img/krav-maga-3.jpg" class="d-block ml-auto mr-auto elevation-15"
               style="border-radius: 15px;margin: 10px" max-width="500px" height="300"/>
        <h1 style="font-size: 19px; direction: rtl;margin-bottom: 10px;padding-top: 30px;">
          {{ $t('edu.text23') }}
        </h1>
      </v-col>

    </v-row>

  </section>
</template>

<style scoped>
#download {
  background-color: #f4f7f5;
}


#download .container,
#download .row {
  height: 100%;
}
</style>
<script>
export default {
  mounted() {
    var locale = JSON.parse(localStorage.getItem("locale")) || "fa";
    var element = document.getElementById('element1');
    if (locale === "en") {
      element.classList.remove('text-right');
      element.classList.add('text-left');
    } else {
      element.classList.remove('text-left');
      element.classList.add('text-right');
    }
  }
}
</script>