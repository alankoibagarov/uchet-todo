import types from "./mutation-types";

const mutations = {
  [types.UPDATE_MODAL](state, payload) {
    // console.log(state);
    state.modal = state.modal === false ? payload : false;
  },
  [types.ADD_TASK](state, payload) {
    console.log(state);
    payload.id = state.tasks[state.tasks.length - 1].id + 1;
    payload.status = 0;
    state.tasks.push(payload);
    state.modal = false;
  },
  [types.DELETE_TASK](state, payload) {
    console.log(state);
    console.log(payload);
    state.tasks.forEach((el, index) => {
      if (el.id === payload) {
        console.log(el);
        state.tasks[index].status = 2;
      }
    });
    state.modal = false;
  },
  [types.EDIT_TASK](state, payload) {
    console.log(state, payload);
    state.tasks[state.tasks.findIndex(el => el.id === payload.id)].text =
      payload.text;
    state.tasks[state.tasks.findIndex(el => el.id === payload.id)].title =
      payload.title;
    state.tasks[
      state.tasks.findIndex(el => el.id === payload.id)
    ].completeDate = payload.completeDate;
    state.modal = false;
  },
  [types.COMPLETE_TASK](state, payload) {
    console.log(state, payload);
    state.tasks[state.tasks.findIndex(el => el.id === payload)].status = 1;
  }
};

export default mutations;
