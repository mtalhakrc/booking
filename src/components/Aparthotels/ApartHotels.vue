<template>
  <div class="ApartHotels">
    <div class="container">
      <div class="ApartHotels-title-cont">
        <h1 class="ApartHotels-title">Aparthotels</h1>
      </div>
      <div class="ApartHotels-items">
        <a href="" class="ApartHotels-item" v-for="i in 4" :key="i">
          <ApartHotelsCard />
        </a>
      </div>

      <div class="aparthotel-button-container">
        <button type="button" class="button button-navy aparthotel-button">
          All aparthotels
          <span>
            <svg class="icon icon-arrow">
              <use xlink:href="#icon-arrow_forward_ios"></use>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ApartHotelsCard from "@/components/Aparthotels/ApartHotelsCard.vue";

export default {
  name: "TheApartHotels",
  components: { ApartHotelsCard },
};
</script>

<style scoped lang="scss">
@import "../../assets/variable";
@import "../../assets/mixin";
.ApartHotels {
  margin-bottom: 50px;
  .container {
    width: 100%;
  }
  &-title-cont {
    display: flex;
    justify-content: center;
  }
  &-title {
    color: $color-navy;
    margin-bottom: 80px;
  }
  &-items {
    overflow: auto;
    @include mq("tablet") {
      overflow: hidden;
    }
    display: flex;
  }
  &-item {
    & + & {
      margin-left: 15px;
    }
    &:hover {
      opacity: 0.6;
    }
  }
}
.icon-arrow {
  display: inline;
  position: relative;
  top: 3px;
  //left: 30px;
  width: 15px;
  height: 15px;
  fill: white;
  stroke: white;
}
.aparthotel-button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @include mq("tablet") {
    margin-top: 50px;
  }
  .aparthotel-button {
    border: none;

    height: $finger-size;
    padding-right: 15px;
    padding-left: 15px;
    @include mq("tablet") {
      height: 50px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
}
</style>
