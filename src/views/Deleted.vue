<template>
  <div id="deleted">
    <Tasks type="deleted" />
  </div>
</template>

<style scoped>
#deleted {
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
