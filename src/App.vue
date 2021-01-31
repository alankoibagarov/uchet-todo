<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Modal />
    <Footer />
  </div>
</template>

<style>
#app {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}

.container {
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  padding: 15px;
}
</style>

<script>
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
export default {
  components: {
    Navbar,
    Footer,
    Modal
  },
  data() {
    return {
      text: "123"
    };
  }
};
</script>
