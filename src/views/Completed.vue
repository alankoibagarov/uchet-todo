<template>
  <div id="completed">
    <Tasks type="completed" :tasks="tasksData" />
  </div>
</template>

<style scoped>
#completed {
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";

export default {
  name: "completed",
  components: {
    Tasks
  },
  computed: {
    tasksData() {
      return this.$store.getters.tasks.filter(task => task.status === 1);
    }
  }
};
</script>
