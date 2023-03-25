<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        right
        dark
        color="#171b34"
        app

    >

      <template v-slot:prepend>
        <v-list-item two-line link @click="">

          <v-list-item-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
<!--            <v-list-item-title>{{ username }}</v-list-item-title>-->
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list-item-group
          v-model="selectedItem"
      >
        <v-list rounded
                dense

        >

<!--========================================================================================-->
          <v-list-item link href="">
            <v-list-item-title dir="rtl" style="font-weight: bold">پروفایل</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
<!--========================================================================================-->
          <v-list-item link href="">
            <v-list-item-title dir="rtl" style="font-weight: bold">انتخاب پکیج</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-package-variant</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
<!--========================================================================================-->
          <v-list-item link href="">
            <v-list-item-title dir="rtl" style="font-weight: bold">مالی</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
<!--========================================================================================-->



        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-app-bar
        dark
        color="#171b34"
        height="69"
        app

    >
      <menu>
        <v-btn
            icon
            @click="logout()"
        >
          <v-icon>mdi-export</v-icon>
        </v-btn>
        <v-btn
            icon
            @click="logout()"
        >
<!--          <v-badge-->
<!--              :content="messages"-->
<!--              :value="messages"-->
<!--              color="red"-->
<!--              overlap-->
<!--          >-->
<!--            -->
<!--          </v-badge>-->
            <v-icon >
              mdi-bell
            </v-icon>
         </v-btn>
      </menu>

      <v-spacer></v-spacer>
        <v-img src="@/assets/img/hart.png" max-width="50px"/>

        <v-toolbar-title style="font-weight: bold;  font-family: 'Gruppo';font-size: 30px;">
          LoverTime
        </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    selectedItem: 0,
    messages: 1,
    drawer: true,

  })
}

</script>
<style scoped>
.v-application .primary--text {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}

</style>
