<template>
  <div class="row">
    <div class="col-md-4"></div>

    <div class="col-md-3"></div>

    <div class="col-md-4">
      <!-- small box -->
      <div class="small-box bg-yellow">
        <div class="inner">
          <h3>44</h3>

          <p>User Registrations</p>
        </div>
        <div class="icon">
          <i class="nav-img fas fa-user-plus fa-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistic",
};
</script>

<style lang="scss" scoped>
.nav-img {
  opacity: 1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
}
</style>