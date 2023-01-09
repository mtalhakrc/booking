<template>
  <div class="Cities">
    <span style="color: red">BURAYI DA SOR</span>
    <div class="container">
      <div class="Cities-item" v-for="i in 10" :key="i">
        <div class="Cities-item-title">Edinburgh</div>
        <div class="Cities-item-subtitle">283,435 hotel reviews</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitiesComponent",
};
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
@import "../assets/mixin.scss";
.Cities {
  margin-bottom: 200px;
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    & + & {
      margin-left: 20px;
    }
    &-title {
      margin-bottom: 15px;
      font-size: $font-size-big;
      font-weight: bold;
      color: $color-navy;
    }
    &-subtitle {
      color: rgba(gray, 0.6);
      font-size: $font-size-small;
    }
  }
}
</style>
