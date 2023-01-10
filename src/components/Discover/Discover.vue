<template>
  <div class="Discover">
    <div class="container">
      <div class="Discover-title-cont">
        <h1 class="Discover-title">Discover</h1>
        <span style="color: red">BURAYI KESİNLİKLE SOR</span>
      </div>

      <div class="Discover-slider">
        <div class="Discover-slider-content">
          <div class="Discover-slider-item" v-for="i in 3" :key="i">
            <a href=""><DiscoverCard /></a>
          </div>
          <a class="Discover-slider-box" href="">
            <svg class="icon icon-arrow">
              <use xlink:href="#icon-arrow_forward_ios"></use>
            </svg>
            <h2 class="Discover-slider-box-title">More</h2>
            <div class="Discover-slider-box-subtitle">
              Put tranquility, scenery and öold town on your to-do list during
              your next visit to France!
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscoverCard from "@/components/Discover/DiscoverCard.vue";

export default {
  name: "TheDiscover",
  components: { DiscoverCard },
};
</script>

<style scoped lang="scss">
@import "../../assets/mixin";
@import "../../assets/variable";
.Discover {
  margin-bottom: 50px;
  position: relative;
  .container {
  }
  &-title-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-title {
    color: $color-navy;
    margin-bottom: 80px;
  }
  &-slider {
    display: flex;
    overflow: auto;
    @include mq("tablet") {
      overflow: hidden;
    }
    &-content {
      display: flex;
    }
    &-item {
      &:hover {
        opacity: $opacity-amount;
      }
      & + & {
        margin-left: 15px;
      }
    }

    &-box {
      display: flex;
      background-color: $color-blue;
      position: relative;
      width: 280px;
      color: white;
      margin-left: 15px;
      flex-direction: column;
      justify-content: end;
      padding: 30px;
      &:hover {
        opacity: $opacity-amount;
      }
      &-title {
        font-weight: bold;
      }
      &-subtitle {
        font-size: $font-size-small;
        line-height: 1.5;
      }
    }
  }
}

.icon {
  position: static;
  transform: none;

  &-arrow {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 30px;
    right: 30px;
    fill: white;
    stroke: white;
  }
}
</style>
