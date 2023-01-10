<template>
  <div class="Navbar">
    <div class="container">
      <a class="Navbar-item" href="">Accommodation</a>
      <a class="Navbar-item" href="">Flights</a>
      <a class="Navbar-item" href="">Rental Cars</a>
      <a class="Navbar-item" href="">Airport taxis</a>
      <a class="Navbar-item" href="">Airport taxis</a>
      <a class="Navbar-item" href="">Airport taxis</a>
      <a class="Navbar-item" href="">Airport taxis</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style lang="scss">
@import "../../assets/variable";
@import "../../assets/mixin";
.Navbar {
  position: relative;
  height: 50px;
  background-color: $color-soft-blue;

  .container {
    display: flex;
    height: 100%;
    font-size: $font-size-small;
    overflow-x: scroll;
    align-items: center;
    @include mq("tablet") {
      overflow-x: hidden;
    }
  }
  &-item {
    display: flex;
    margin-right: 20px;
    height: 100%;
    align-items: center;
  }
  @include mq("tablet") {
    padding-left: 0;
  }
}
</style>
