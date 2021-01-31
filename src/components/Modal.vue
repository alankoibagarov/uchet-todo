<template>
  <div id="modal">
    <div v-if="modalStatus">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper animate__animated animate__fadeIn">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" style="text-transform: capitalize">
                    {{ `${modalStatus.type} task` }}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="updateModal">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div v-if="modalStatus.type === 'add'">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          placeholder="Enter task title"
                          v-model="form.title"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Text</label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Enter task description"
                          v-model="form.text"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Date and time</label>
                        <div class="row">
                          <div class="col">
                            <input
                              type="date"
                              class="form-control"
                              id="title"
                              placeholder="Enter task title"
                              v-model="form.completeDate"
                            />
                          </div>
                          <div class="col-3">
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              v-model="form.completeHour"
                            >
                              <option v-for="item in 24" :key="item">{{
                                item
                              }}</option>
                            </select>
                          </div>
                          <div class="col-3">
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              v-model="form.completeMinute"
                            >
                              <option v-for="item in 60" :key="item">{{
                                item
                              }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div v-else-if="modalStatus.type === 'update'">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          placeholder="Enter task title"
                          v-model="form.title"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Text</label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Enter task description"
                          v-model="form.text"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Date and time</label>
                        <div class="row">
                          <div class="col">
                            <input
                              type="date"
                              class="form-control"
                              id="title"
                              placeholder="Enter task title"
                              v-model="form.completeDate"
                            />
                          </div>
                          <div class="col-3">
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              v-model="form.completeHour"
                            >
                              <option v-for="item in 24" :key="item">{{
                                item
                              }}</option>
                            </select>
                          </div>
                          <div class="col-3">
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              v-model="form.completeMinute"
                            >
                              <option v-for="item in 60" :key="item">{{
                                item
                              }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div v-else>
                    Do you really want to delete a task?
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="updateModal"
                  >
                    Close
                  </button>
                  <button
                    v-if="modalStatus.type === 'add'"
                    type="button"
                    class="btn btn-success"
                    @click="addTask"
                  >
                    Add task
                  </button>
                  <button
                    v-else-if="modalStatus.type === 'update'"
                    type="button"
                    class="btn btn-warning"
                    @click="updateTask"
                  >
                    Update task
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-danger"
                    @click="deleteTask"
                  >
                    Delete task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        text: "",
        completeDate: ""
      }
    };
  },
  watch: {
    modalStatus() {
      if (this.modalStatus.type === "update") {
        this.form = {
          ...this.$store.getters.tasks.find(el => el.id === this.modalStatus.id)
        };
        if (this.form.completeDate) {
          this.form.completeDate = this.form.completeDate.toString();
          console.log(typeof this.form.completeDate);
          this.form.completeHour = parseInt(
            this.form.completeDate.split(" ")[4].split(":")[0]
          );
          console.log(this.form.completeHour);
          this.form.completeMinute = parseInt(
            this.form.completeDate.split(" ")[4].split(":")[1]
          );
          console.log(this.form.completeHour);
          let date = new Date(this.form.completeDate).toISOString();
          console.log(date);
          this.form.completeDate = date.split("T")[0];

          console.log(this.form);
        }
      } else {
        this.form = {};
      }
    }
  },
  computed: {
    modalStatus() {
      return this.$store.getters.modal;
    }
  },
  methods: {
    updateModal() {
      this.$store.dispatch("updateModal");
    },
    saveTask() {
      this.$store.dispatch("updateModal");
    },
    addTask() {
      console.log(this.form);
      let dateText = `${this.form.completeDate}T${
        this.form.completeHour < 10
          ? `0${this.form.completeHour}`
          : this.form.completeHour
      }:${
        this.form.completeMinute < 10
          ? `0${this.form.completeMinute}`
          : this.form.completeMinute
      }:00`;
      console.log(dateText);
      let date = new Date(dateText);
      console.log(date);
      let data = {
        title: this.form.title,
        text: this.form.text,
        completeDate: date
      };
      this.$store.dispatch("addTask", data);
    },
    updateTask() {
      console.log(this.form);
      console.log(this.modalStatus);
      let dateText = `${this.form.completeDate}T${
        this.form.completeHour < 10
          ? `0${this.form.completeHour}`
          : this.form.completeHour
      }:${
        this.form.completeMinute < 10
          ? `0${this.form.completeMinute}`
          : this.form.completeMinute
      }:00`;
      console.log(dateText);
      let date = new Date(dateText);
      console.log(date);
      let data = {
        id: this.modalStatus.id,
        title: this.form.title,
        text: this.form.text,
        completeDate: date
      };
      this.$store.dispatch("editTask", data);
    },
    deleteTask() {
      console.log(this.modalStatus);
      this.$store.dispatch("deleteTask", this.modalStatus.id);
    }
  }
};
</script>
