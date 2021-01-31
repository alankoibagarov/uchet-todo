<template>
  <div id="current">
    <Tasks type="current" :tasks="tasksData" />
  </div>
</template>

<style scoped>
#current {
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";

export default {
  name: "Home",
  components: {
    Tasks
  },
  computed: {
    tasksData() {
      return this.$store.getters.tasks.filter(task => task.status === 0);
    }
  }
};
</script>
