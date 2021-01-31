const actions = {
  updateModal(context, payload) {
    // console.log(context);
    console.log(payload);
    this.commit("UPDATE_MODAL", payload);
  },
  addTask(context, payload) {
    this.commit("ADD_TASK", payload);
  },
  deleteTask(context, payload) {
    this.commit("DELETE_TASK", payload);
  },
  editTask(context, payload) {
    this.commit("EDIT_TASK", payload);
  },
  completeTask(context, payload) {
    this.commit("COMPLETE_TASK", payload);
  }
};

export default actions;
