<template>
  <aside class="main-sidebar">
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
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
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    links: [
      { title: "Статистика", url: "/admin/statistic" },
      { title: "Баннеры", url: "/admin/banners" },
      { title: "Фильмы", url: "/admin/movies" },
      { title: "Кинотеатры", url: "/admin/cinema" },
      { title: "Билеты", url: "/admin/tickets" },
      { title: "Новости", url: "/admin/news" },
      { title: "Акции", url: "/admin/shares" },
      { title: "Страницы", url: "/admin/pages" },
      { title: "Пользователи", url: "/admin/users" },
      { title: "Рассылки", url: "/admin/mailings" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
aside {
  margin-top: 86px;
}
.active {
  background: #e4e3e3;
}
</style>
