<template>
  <div class="info-block">
    <div @click="$emit('remove')" class="btn btn-default info-block__close">
      <svg class="info-block__close-img" viewBox="0 0 8 8">
        <path
          d="M1.406 0l-1.406 1.406.688.719 1.781 1.781-1.781 1.781-.688.719 1.406 1.406.719-.688 1.781-1.781 1.781 1.781.719.688 1.406-1.406-.688-.719-1.781-1.781 1.781-1.781.688-.719-1.406-1.406-.719.688-1.781 1.781-1.781-1.781-.719-.688z"
          id="x"
          fill="rgba(0,0,0,0.7)"
        ></path>
      </svg>
    </div>
    <router-link
      class="info-block__image"
      tag="img"
      :src="cinemaData.mainImage.imageUrl"
      :to="{
        name: 'CinemaAdd',
        params: {
          way: 'add-cinema',
          dataArr: cinemaDataArr,
          dataOb: cinemaData,
          dataImg: cinemaData.mainImage.imageUrl,
          dataBanner: cinemaData.topBanner.imageUrl,
          dataHall: cinemaData.hallList,

          dbRef: 'cinema',
          dbMainImageRef: 'cinema/main',
          dbTopBannerRef: 'cinema/banner',
          dbGalleryRef: 'cinema/gallery',
        },
      }"
    >
    </router-link>
    <div class="info-block__image-name">{{ cinemaData.name }}</div>
  </div>
</template>

<script>
export default {
  name: "CinemaBlocks",
  props: ["data", "dataCinema"],
  data() {
    return {
      cinemaData: this.data,
      cinemaDataArr: this.dataCinema,
    };
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  position: relative;
  margin: 10px 30px 20px 0;
  max-width: 300px;

  &__image {
    width: 300px;
    height: 200px;
    background: #a0a6ac;
    border-radius: 0.25rem;
    background-size: cover;

    &-name {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      font-size: 1.3em;
      font-weight: bold;
    }
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 3px;

    &-img {
      width: 13px;
      height: 13px;
    }
  }
}
</style>