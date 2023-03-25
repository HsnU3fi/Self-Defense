<template >

  <v-app>

<!--    <navigation :color="color" :flat="flat"/>-->
    <v-main class="pt-0">
      <sag/>


    </v-main>

  </v-app>

</template>


<script>
import sag from "../components/Dashbord";


export default {
  name: "App",
  components: {
    sag
    },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),



};
</script>
