import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

/*
import { setInteractionMode } from "vee-validate";
import { modeComrade } from "./modes"

setInteractionMode('debounce', modeDebounce);
*/

import './rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
