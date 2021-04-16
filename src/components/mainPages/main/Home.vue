<template>
  <div class="container">
    <div class="gallery-slider">
      <!-- <Slider
        :gallery="
          moviesData.current[this.moviesData.current.length - 1].galleryImages
        "
      /> -->
      <div class="gallery-slider-name">
        <h3>
          {{ moviesData.current[this.moviesData.current.length - 1].name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
// import Slider from "@/components/mainPages/SliderMain.vue";
import firebase from "firebase";

export default {
  name: "Home",
  // components: { Slider },
  data() {
    return {
      moviesData: {},
    };
  },
  created() {
    const baseRef = firebase.database().ref("movies");
    baseRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.moviesData = snapshot.val();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery-slider {
  position: relative;
  &-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      color: #ffffffb5;
    }
  }
}
</style>
