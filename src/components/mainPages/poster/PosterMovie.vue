<template>
  <div class="poster">
    <div class="trailer">
      <iframe
        width="720"
        height="405"
        :src="movieData.trailer"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterMovie",
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
.trailer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>