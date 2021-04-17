<template>
  <div>
    <router-link
      class="info-block__image"
      tag="img"
      :src="movieData.mainImage.imageUrl"
      :to="{
        name: 'PosterMovie',
        params: {
          way: 'poster-movie',
          movieData: movieData,
        },
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PosterList",
  props: {
    movieData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>