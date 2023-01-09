<template>
  <span style="color: red">BURAYI SOR</span>
  <div class="Destinations">
    <div class="container">
      <h1 class="Destinations-title">More Destinations</h1>
      <div class="Destinations-cards-container">
        <div class="Destinations-cards-item" v-for="i in 5" :key="i">
          <a href="">
            <DestinationsCard />
          </a>
        </div>

        <div class="Destinations-all Destinations-cards-item">
          <a href="">
            <button class="Destinations-all-button">
              Show me all destinations
              <span>
                <svg class="icon icon-arrow">
                  <use xlink:href="#icon-arrow_forward_ios"></use></svg
              ></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DestinationsCard from "@/components/views/Destinations/DestinationsCard.vue";

export default {
  name: "TheDestinations",
  components: { DestinationsCard },
};
</script>

<style scoped lang="scss">
@import "../../../assets/variable";
@import "../../../assets/mixin";
.Destinations {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  .container {
    width: 100%;
  }
  &-title {
    display: flex;
    justify-content: center;
    color: $color-navy;
    margin-bottom: 50px;
  }
  &-cards {
    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include mq("tablet") {
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    &-item {
      margin-bottom: 30px;
      flex-basis: 32%;

      & + & {
      }
      &:hover {
        opacity: $opacity-amount;
      }
    }
  }
  &-all {
    height: 100%;
    position: relative;
    &-button {
      background-color: $color-blue;
      color: white;
      height: 108px;
      width: 100%;
      border: none;
      border-radius: $border-radius;
    }
  }
}
.icon {
  &-arrow {
    position: relative;
    top: 3px;
    left: 30px;
    width: 15px;
    height: 15px;
    fill: white;
    stroke: white;
  }
}
</style>
