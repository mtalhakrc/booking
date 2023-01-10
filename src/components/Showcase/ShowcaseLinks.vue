<template>
  <div class="Links">
    <div class="container">
      <a class="Links-item" href="">Find deals</a>
      <a class="Links-item" href="">Travel guides</a>
      <a class="Links-item" href="">How was your stay?</a>
      <a class="Links-item" href="">Holiday rentals</a>
      <a class="Links-item" href="">for Business</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseLinks",
};
</script>

<style lang="scss">
@import "../../assets/mixin";
@import "../../assets/variable";
.Links {
  margin-top: 60px;
  .container {
    display: flex;
    flex-direction: column;
    @include mq("tablet") {
      flex-direction: row;
      justify-content: center;
    }
  }
  //.Links class'ını içeren elementin altındaki bütün .Links-item class'ını içeren elementler
  &-item {
    width: 100%;
    display: flex;
    font-weight: lighter;
    justify-content: center;
    align-items: center;
    color: white;
    height: 22px;
    &:hover {
      text-decoration: underline;
    }
    & + & {
      margin-top: 10px;
    }

    @include mq("tablet") {
      width: auto;
      display: inline-block;
      & + & {
        margin-top: 0;
        margin-left: 20px;
      }
    }
  }
}
</style>
