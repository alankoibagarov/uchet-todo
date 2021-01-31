<template>
  <div id="tasks">
    <h3>List of {{ type }} tasks</h3>
    <div class="row">
      <div class="col-sm">
        <div class="card mb-3" v-for="tasks in 15" :key="tasks">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"]
};
</script>
