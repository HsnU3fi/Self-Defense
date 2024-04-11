import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
var locale = JSON.parse(localStorage.getItem("locale")) || "fa";
var rtl = (locale !== "fa");
export default new Vuetify({
    rtl:rtl,
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#171b34",
                accent: "3D87E4"
            }
        }
    }
});
