<template>
  <div class="main-block">
    <PosterList v-for="movie in allMovies" :key="movie.id" :movieData="movie" />
  </div>
</template>

<script>
import PosterList from "@/components/mainPages/poster/PosterList.vue";
import firebase from "firebase";

export default {
  name: "Poster",
  components: {
    PosterList,
  },
  data() {
    return {
      moviesData: [],
    };
  },
  computed: {
    allMovies() {
      //   console.log(this.moviesData.current);
      //   console.log(this.moviesData.new);
      //   console.log(this.moviesData.current.concat(this.moviesData.new));
      return this.moviesData.current.concat(this.moviesData.new);
    },
  },
  created() {
    const baseRef = firebase.database().ref("movies");
    baseRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.moviesData = snapshot.val();
      }
    });
    // this.allMovies();
  },
};
</script>

<style lang="scss" scoped>
</style>