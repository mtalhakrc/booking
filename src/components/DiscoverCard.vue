<template>
  <div class="DiscoverCard">
    <h2 class="DiscoverCard-title">United States</h2>
    <div class="DiscoverCard-subtitle">
      Enjoy relaxation, shopping and restaurants during your next trip to USA!
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverCard",
};
</script>

<style scoped lang="scss">
@import "../assets/mixin.scss";
@import "../assets/variable.scss";
.DiscoverCard {
  background-image: url("../img/usa-photo.jpg");
  width: 280px;
  box-shadow: 0 5px 15px rgba(black, 0.2);
  height: 280px;
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  :before {
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(black, 0.2);
    position: absolute;
    left: 0;
    top: 0;
  }

  &-title {
    z-index: 1;
    font-weight: bold;
  }
  &-subtitle {
    position: relative;
    font-size: $font-size-small;
    line-height: 1.5;
  }
}
</style>
