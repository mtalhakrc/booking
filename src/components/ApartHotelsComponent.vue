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
    </div>
  </div>
</template>

<script>
import ApartHotelsCard from "@/components/ApartHotelsCard.vue";

export default {
  name: "ApartHotelsComponent",
  components: { ApartHotelsCard },
};
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
@import "../assets/mixin.scss";
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
</style>
