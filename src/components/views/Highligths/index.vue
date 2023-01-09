<template>
  <div>
    <div class="Highlights">
      <div class="container">
        <div class="Highlights-box" v-for="i in 5" :key="i">
          <div class="Highlights-box-title">Paris</div>
          <div class="Highlights-box-tagtitle">Top reasons to visit</div>
          <div class="Highlights-box-tags">
            <a href="" class="Highlights-box-tags-item">museum</a>
            <a href="" class="Highlights-box-tags-item">museum</a>
            <a href="" class="Highlights-box-tags-item">museum</a>
          </div>

          <div
            class="Highlights-box-detail"
            :class="{ 'is-showBox': showBox }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheHighlights",
  setup() {
    const showBox = ref(false);
    return {
      showBox,
    };
  },
};
</script>

<style lang="scss">
@import "../../../assets/mixin";
.Highlights {
  //margin-bottom: 200px;
  margin-top: 50px;
  @include mq("tablet") {
    margin-top: -100px;
  }
  .container {
    display: flex;
    overflow: auto;
  }

  &-box {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-image: url("../../../img/highlights-image.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    background-size: cover;
    color: white;
    z-index: 1;
    padding: 20px;
    margin-right: 30px;
    &-button {
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: 0.2s;
      width: 100%;
      height: 100%;
      border: none;
      background-color: rgba(black, 0.7);
      position: absolute;
      left: 0;
      top: 0;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(black, 0.2);
      z-index: -1;
    }

    &:hover &-button {
      opacity: 1;
    }

    &-title {
    }

    &-tagtitle {
      margin-top: 5px;
    }
    &-tags {
      margin-top: 5px;
      display: flex;
      &-item {
        color: inherit;
      }
    }

    &-detail {
      position: absolute;
      top: 0;
      opacity: 0;
      //transform: translateX(-100%);
      transition: 0.5s;
      //left: 100%;
    }
  }
}
.is-showBox {
  background-color: red;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: 0.2s;
  //transform: translateX(100%);
}
</style>
