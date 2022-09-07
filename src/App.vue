<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    let oldScript = document.createElement("script");
    oldScript.setAttribute("src", "oldjs/jquery.min.js");
    document.head.appendChild(oldScript);
  },

  mounted() {},
};
</script>

<style></style>
