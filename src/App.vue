<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import AdminLayout from "@/components/adminPages/AdminLayout.vue";
import MainLayout from "@/components/mainPages/MainLayout.vue";

export default {
  name: "App",
  components: {
    AdminLayout,
    MainLayout,
  },
  computed: {
    layout() {
      // return (this.$route.meta.layout || "admin") + "-layout";
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "~admin-lte/dist/css/adminlte.min.css";
</style>
