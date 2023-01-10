<template>
  <div class="Destinations-card">
    <img
      class="Destinations-card-image"
      src="../../img/destinations-card-image.jpg"
      alt=""
    />
    <div class="Destinations-card-content">
      <svg class="icon icon-arrow">
        <use xlink:href="#icon-arrow_forward_ios"></use>
      </svg>
      <div class="Destinations-card-content-title">Barcelona</div>
      <div class="Destinations-card-content-subtitle">
        <svg class="icon icon-location form-item-icon">
          <use xlink:href="#icon-location"></use>
        </svg>
        <span class="Destinations-card-content-subtitle-place">Spain</span>
        <span class="Destinations-card-content-subtitle-tag">TOP</span>
        <svg class="icon icon-airplane">
          <use xlink:href="#icon-airplane"></use>
        </svg>
      </div>
      <div class="Destinations-card-content-tags">
        <a class="Destinations-card-content-tags-item" href=""
          >24 apartments,</a
        >
        <a class="Destinations-card-content-tags-item" href=""
          >10 aparthotels,</a
        >
        <a class="Destinations-card-content-tags-item" href="">2 villas,</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destinations-card",
};
</script>

<style scoped lang="scss">
@import "../../assets/variable";
@import "../../assets/mixin";
.Destinations-card {
  display: flex;
  //width: 400px;
  position: relative;

  &-image {
    width: 120px;
    margin-right: 20px;
  }

  &-content {
    //width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgba(gray, 0.2);
    &-title {
      font-weight: bold;
      color: $color-navy;
      font-size: $font-size-big;
      margin-bottom: 5px;
    }
    &-subtitle {
      display: flex;
      align-items: center;
      &-place {
        color: gray;
        font-size: $font-size-small;
        font-weight: bold;
      }
      &-tag {
        display: flex;
        align-items: center;
        margin-left: 10px;
        height: 20px;
        box-sizing: content-box;
        background-color: $color-yellow;
        font-size: 10px;
        padding-right: 10px;
        padding-left: 10px;
        color: white;
      }
    }
    &-tags {
      margin-top: 15px;
      &-item {
        font-size: $font-size-small;
        color: rgba(gray, 0.5);
        text-decoration: underline;
        & + & {
          margin-left: 5px;
        }
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
.icon {
  position: static;
  transform: none;
  &-location {
    height: 20px;
    width: 20px;
    stroke: gray;
    fill: gray;
    top: 0;
    margin-right: 5px;
  }
  &-airplane {
    padding: 5px;
    margin-left: 10px;
    background-color: $color-blue;
    width: 20px;
    height: 20px;
    fill: white;
    stroke: white;
  }
  &-arrow {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 10px;
    right: 10px;
    fill: rgba(gray, 0.5);
    stroke: rgba(gray, 0.5);
  }
}
</style>
