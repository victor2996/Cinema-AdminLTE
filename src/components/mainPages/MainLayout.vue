<template>
  <div>
    <Header />
    <!-- <section class="content-wrapper"> -->
    <router-view />
    <!-- </section> -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/mainPages/Header.vue";
import Footer from "@/components/mainPages/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>