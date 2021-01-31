<template>
  <div id="completed">
    <Tasks type="completed" />
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
  }
};
</script>
