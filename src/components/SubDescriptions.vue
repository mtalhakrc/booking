<template>
  <div class="SubDescriptions">
    <div class="container">
      <div class="SubDescriptions-item">
        <svg class="icon icon-comment">
          <use xlink:href="#icon-comment-o"></use>
        </svg>
        <div class="SubDescriptions-item-kap">
          <h2 class="SubDescriptions-item-title">
            <span class="color-blue title-span">131,130,000</span>reviews
          </h2>
          <div class="SubDescriptions-item-subtitle">
            Real guests. Real stays. Real opinions to help you make the right
            choice
          </div>
        </div>
      </div>

      <div class="SubDescriptions-item">
        <svg class="icon icon-lifebuoy">
          <use xlink:href="#icon-lifebuoy"></use>
        </svg>
        <div class="SubDescriptions-item-kap">
          <h2 class="SubDescriptions-item-title">
            We are here to help <span>24/7</span>
          </h2>
          <div class="SubDescriptions-item-subtitle">
            Find answers, manage your booking and more in out
            <a class="color-blue subtitle-link" href="">Help Centre</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubDescriptions",
};
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
@import "../assets/mixin.scss";
.SubDescriptions {
  margin-bottom: 50px;

  .container {
    width: 100%;
    display: flex;
    @include mq("tablet") {
      justify-content: center;
    }
  }

  &-item {
    display: flex;
    width: 50%;
    @include mq("tablet") {
      width: 30%;
    }

    &-kap {
      display: flex;
      flex-direction: column;
    }

    &-title {
      color: $color-navy;
      margin-top: 0;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    &-subtitle {
      display: block;
      line-height: 1.6;
      color: black;
    }
    & + & {
      @include mq("tablet") {
        margin-top: 0;
        margin-left: 40px;
      }
    }
  }
}
.icon {
  width: 48px;
  height: 48px;
  margin-right: 15px;
  //color: $color-navy;
  stroke: $color-navy;
  fill: $color-navy;
  &-comment {
  }
  &-lifebuoy {
  }
}
.color-blue {
  color: $color-blue;
}
.title-span {
  display: block;
}
.subtitle-link {
  text-decoration: underline;
}
a {
  &:hover {
    text-decoration: none;
  }
}
</style>
