<template>
  <div class="header-main">
    <div class="log-in log-out">
      <router-link tag="button" to="/admin/statistic"> Admin </router-link>
    </div>
    <div class="banner-top">
      <Carusel :data="banner.topcards" :interval="5000" />
    </div>
    <div
      class="back-banner"
      :style="{ 'background-image': 'url(' + banner.backcard.url + ')' }"
    >
      <Header />
      <div class="container">
        <div class="gallery-slider">
          <Slider
            :gallery="
              moviesData.current[moviesData.current.length - 1].galleryImages
            "
          />
          <div class="gallery-slider-name newest">
            <router-link
              tag="h3"
              :to="{
                name: 'PosterMovie',
                params: {
                  way: 'poster-movie',
                  movieData: moviesData.current[moviesData.current.length - 1],
                },
              }"
            >
              {{ moviesData.current[moviesData.current.length - 1].name }}
            </router-link>
          </div>
        </div>

        <div class="movies">
          <h3>Смотрите сегодня</h3>
          <div class="movies__list">
            <PosterList
              v-for="movie in moviesData.current"
              :key="movie.id"
              :movieData="movie"
            />
          </div>

          <h3>Смотрите скоро</h3>
          <div class="movies__list">
            <PosterList
              v-for="movie in moviesData.new"
              :key="movie.id"
              :movieData="movie"
            />
          </div>
        </div>

        <div class="gallery-slider">
          <h3>Новости и Акции</h3>
          <Slider :gallery="banner.newscards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/mainPages/home/SliderMain.vue";
import Header from "@/components/mainPages/Header.vue";
import Carusel from "@/components/mainPages/home/Carusel.vue";
import PosterList from "@/components/mainPages/poster/PosterList.vue";
import firebase from "firebase";

export default {
  name: "Home",
  components: { Carusel, Header, Slider, PosterList },
  data() {
    return {
      moviesData: {},
      banner: null,
    };
  },

  created() {
    const baseRef = firebase.database().ref("movies");
    baseRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.moviesData = snapshot.val();
      }
    });
    const bannerRef = firebase.database().ref("banners");
    bannerRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.banner = snapshot.val();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  margin-bottom: 40px;

  .banner-top {
    height: 100px;
    width: 100%;
  }
}
.back-banner {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.container {
  background: #ffffffda;
}
.gallery-slider {
  position: relative;

  &-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      color: #ffffffda;
    }
    &.newest {
      cursor: pointer;
    }
  }
}

.movies {
  &__list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }

  h3 {
    padding: 20px 10px;
    display: flex;
    justify-content: center;
  }
}

.gallery-slider h3 {
  /* padding: 20px 10px; */
  display: flex;
  justify-content: center;
}
</style>
