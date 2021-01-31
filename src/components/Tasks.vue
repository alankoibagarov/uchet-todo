<template>
  <div id="tasks">
    <div class="tasks-header">
      <h3 class="mb-0">List of {{ type }} tasks</h3>
      <div>
        <button
          type="button"
          class="btn btn-success"
          @click="updateModal('add')"
        >
          + Add
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="card mb-3" v-for="task in tasks" :key="task.id">
          <div class="card-header">
            <div>
              <h5 class="mb-0">{{ task.title }}</h5>
            </div>
            <div v-if="type === 'current'">
              <button
                type="button"
                class="btn btn-primary"
                @click="completeTask(task.id)"
              >
                Complete
              </button>
              <button
                type="button"
                class="btn btn-warning ml-2"
                @click="updateModal('update', task.id)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger ml-2"
                @click="updateModal('delete', task.id)"
              >
                Delete
              </button>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ task.text }}
            </p>
            <hr />
            <small>{{ taskDate(task) }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#tasks .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tasks-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  props: ["type", "tasks"],
  methods: {
    taskDate(task) {
      if (task.completeDate === "") {
        return "No date";
      } else {
        let date = new Date(task.completeDate);
        // console.log(date);
        return `${date.getDate()}/${date.getMonth() +
          1}/${date.getFullYear()}/${date.getHours()}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
      }
    },
    updateModal(type, id) {
      let data = {
        type,
        id
      };
      this.$store.dispatch("updateModal", data);
    },
    completeTask(id) {
      this.$store.dispatch("completeTask", id);
    }
  }
};
</script>
