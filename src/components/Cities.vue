<template>
  <div class="Cities">
    <span style="color: red">BURAYI DA SOR</span>
    <div class="container">
      <h1 class="Cities-title">Destinations we love</h1>

      <div class="Cities-buttons">
        <button type="button" class="button Cities-buttons-item">
          Regions
        </button>
        <button type="button" class="button Cities-buttons-item">Cities</button>
        <button type="button" class="button Cities-buttons-item">
          Places of interest
        </button>
      </div>
      <div class="items-container">
        <div class="Cities-item" v-for="i in 10" :key="i">
          <div class="Cities-item-title">Edinburgh</div>
          <div class="Cities-item-subtitle">283,435 hotel reviews</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCities",
};
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
@import "../assets/mixin.scss";
.Cities {
  margin-bottom: 200px;
  .container {
  }
  &-title {
    color: $color-navy;
    margin-bottom: 40px;
    text-align: center;
  }

  &-item {
    flex-basis: 32%;
    margin-bottom: 20px;
    @include mq("tablet") {
      flex-basis: 20%;
    }
    &-title {
      margin-bottom: 5px;
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

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
