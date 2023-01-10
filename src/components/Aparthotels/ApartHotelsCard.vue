<template>
  <div class="ApartHotelsCard">
    <!--    <img class="ApartHotelsCard-img" src="../img/usa-photo.jpg" alt="" />-->
    <div class="ApartHotelsCard-img">
      <div class="ApartHotelsCard-tag">
        <span class="ApartHotelsCard-tag-number">7.6</span>
        <span class="ApartHotelsCard-tag-description">good</span>
      </div>
    </div>
    <h3 class="ApartHotelsCard-title">Mood of Galata Suites</h3>
    <div class="ApartHotelsCard-subtitle">
      <svg class="icon icon-location form-item-icon">
        <use xlink:href="#icon-location"></use>
      </svg>
      <span class="ApartHotelsCard-subtitle-location">Istabul, Turkey</span>
      <a href="" class="ApartHotelsCard-subtitle-reviews">203 reviews </a>
    </div>
    <div class="ApartHotelsCard-description">
      Offering a terrace, Mood of Galata Suites located in Istanbul, 300 metres
      from Galata tower...
    </div>
  </div>
</template>

<script>
export default {
  name: "ApartHotelsCard",
};
</script>

<style scoped lang="scss">
@import "../../assets/variable";
@import "../../assets/mixin";
.ApartHotelsCard {
  color: white;
  position: relative;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(black, 0.2);
  padding: 15px;
  width: 280px;
  &-img {
    display: block;
    width: 100%;
    height: 200px;
    background: #083b87 url("../../img/usa-photo.jpg") no-repeat center
      center/cover;
    position: relative;
  }
  &-tag {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -15px;
    bottom: 20px;
    height: $finger-size;
    padding-right: 15px;
    padding-left: 15px;
    background-color: $color-blue;
    &-number {
      font-size: $font-size-big;
      font-weight: bold;
      margin-right: 5px;
    }
    &-description {
      font-size: 10px;
      position: relative;
      top: 3px;
      color: rgba(white, 0.5);
    }
  }
  &-title {
    color: $color-navy;
    font-weight: bold;
    margin-bottom: 5px;
  }
  &-subtitle {
    color: gray;
    font-size: $font-size-small;
    display: flex;
    align-items: center;
    &-location {
      margin-right: 10px;
    }
    &-reviews {
    }
  }
  &-description {
    margin-top: 10px;

    color: black;
    line-height: 1.4;
    font-size: $font-size-smaller;
  }
}
.relative {
  position: relative;
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
}
a {
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>
