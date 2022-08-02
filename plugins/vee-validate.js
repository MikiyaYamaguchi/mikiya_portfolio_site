import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";
import ja from "vee-validate/dist/locale/ja.json";
import { email, max, required } from "vee-validate/dist/rules";
import Vue from "vue";
localize("ja", ja);

extend("required", required);
extend("max", max);
extend("email", email);
extend("name_kana", {
  message: (field) => {
    return field + "は全角カタカナのみ使用できます";
  },
  validate: (value) => {
    return /^[ァ-ン]+$/.test(value);
  },
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);
