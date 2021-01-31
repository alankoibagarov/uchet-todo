import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import tasks from "./tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    tasks
  },
  getters: {
    tasks: state => state.tasks,
    modal: state => state.modal
  },
  mutations,
  actions,
  plugins: [],
  modules: {}
});
