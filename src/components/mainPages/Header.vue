<template>
  <div class="header-main">
    <div class="log-in log-out" v-if="this.$route.path == '/'">
      <router-link tag="button" to="/admin/statistic"> Admin </router-link>
    </div>
    <div class="banner-top" v-if="this.$route.path == '/'">
      <Carusel :data="banners" :interval="5000" />
    </div>
    <header>
      <div class="container">
        <div class="logo">
          <router-link to="/" class="navbar-brand d-flex">
            <img src="@/assets/img/logo.png" alt="Logo" class="brand-image" />
            <h4>SuperCinema</h4>
          </router-link>
        </div>
        <nav>
          <div class="info">
            <div class="info__search">
              <input type="search" placeholder="Поиск" />
            </div>
            <div class="info__contacts">
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse fa-fw"></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse fa-fw"></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-vk fa-stack-1x fa-inverse fa-fw"></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i
                    class="fab fa-telegram-plane fa-stack-1x fa-inverse fa-fw"
                  ></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-instagram fa-stack-1x fa-inverse fa-fw"></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i
                    class="fab fa-odnoklassniki fa-stack-1x fa-inverse fa-fw"
                  ></i>
                </span>
              </a>
              <a href="#" class="info__contacts-img">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i
                    class="fab fa-google-plus-g fa-stack-1x fa-inverse fa-fw"
                  ></i>
                </span>
              </a>
            </div>
            <div class="info__phone">
              <p>{{ mainPageData.phone1 }}</p>
              <p>{{ mainPageData.phone2 }}</p>
            </div>
          </div>
          <div class="navbar-custom-menu">
            <nav class="mt-2">
              <ul
                class="nav nav-pills d-flex"
                data-widget="treeview"
                role="menu"
              >
                <router-link
                  v-for="link in links"
                  :key="link.url"
                  tag="li"
                  active-class="active"
                  :to="link.url"
                >
                  <a href="#" class="nav-link">{{ link.title }}</a>
                </router-link>

                <li
                  class="menu__item menu__item--dropdown"
                  @click="toggle('ranking')"
                  :class="{ open: dropDowns.ranking.open }"
                >
                  <a class="nav-link menu__link menu__link--toggle">
                    <span>О кинотеатре </span>
                    <i class="menu__icon fa fa-angle-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <router-link
                      v-for="link in linksAbout"
                      :key="link.url"
                      tag="li"
                      class="nav-link"
                      active-class="active"
                      :to="link.url"
                    >
                      <a href="#" class="nav-link">{{ link.title }}</a>
                    </router-link>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Carusel from "@/components/mainPages/main/Carusel.vue";
import firebase from "firebase";

export default {
  name: "Header",
  components: { Carusel },
  data: () => ({
    links: [
      { title: "Афиша", url: "/statistic" },
      { title: "Расписание", url: "/banners" },
      { title: "Скоро", url: "/movies" },
      { title: "Кинотеатры", url: "/cinema" },
      { title: "Акции", url: "/shares" },
    ],
    linksAbout: [
      { title: "Новости", url: "/statistic" },
      { title: "Реклама", url: "/banners" },
      { title: "Кафе", url: "/movies" },
      { title: "Приложения", url: "/cinema" },
      { title: "Контакты", url: "/shares" },
    ],

    dropDowns: {
      ranking: { open: false },
    },
    mainPageData: {},
    banners: [],
  }),
  //   watch: {
  //     $route(to, from) {
  //       // обрабатываем изменение параметров маршрута...
  //       console.log(to, from);
  //       console.log(this.$route.path);
  //     },
  //   },
  methods: {
    toggle(dropdownName) {
      //alert(dropdownName)
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
      console.log(this.$route);
    },

    close() {
      for (let dd in this.dropDowns) {
        this.dropDowns[dd].open = false;
      }
    },
  },
  ready() {
    var self = this;
    window.addEventListener(
      "click",
      function (e) {
        if (!e.target.parentNode.classList.contains("menu__link--toggle")) {
          self.close();
        }
      },
      false
    );
  },
  created() {
    const baseRef = firebase.database().ref("pages/main");
    baseRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.mainPageData = snapshot.val();
      }
    });
    const bannersRef = firebase.database().ref("banners/topcards");
    bannersRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        this.banners = snapshot.val();
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
    margin-bottom: 20px;
  }
}
header {
  .container {
    display: flex;
    justify-content: space-between;
  }
}
.logo {
  height: 86px;

  h4 {
    margin: 0;
    padding: 15px 0 0 10px;
    color: #000;
  }
  .brand-image {
    width: 130px;
  }
  &:hover {
    opacity: 0.7;
  }
}

nav {
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__contacts {
      margin-left: 30px;

      &-img:nth-child(1) {
        color: #205a9b;
      }
      &-img:nth-child(2) {
        color: #00acf4;
      }
      &-img:nth-child(3) {
        color: #25668c;
      }
      &-img:nth-child(4) {
        color: #3a9dbf;
      }
      &-img:nth-child(5) {
        color: #d92e7f;
      }
      &-img:nth-child(6) {
        color: #fc9002;
      }
      &-img:nth-child(7) {
        color: #de2c02;
      }

      &-img:hover {
        color: #8080808a;
      }
    }

    &__phone {
      margin-left: 30px;
    }
  }

  .active {
    background: #e4e3e3;
  }

  ul {
    list-style: none;
  }

  .menu__item {
    position: relative;
    padding-right: 3rem;
  }

  .open .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    font-size: 0.9rem;
    position: absolute;
    min-width: 130px;
    top: 2.2rem;
    display: none;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    .active {
      background: #e4e3e3;
    }
  }
}
</style>