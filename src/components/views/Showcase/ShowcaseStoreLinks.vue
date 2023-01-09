<template>
  <div class="Store-links">
    <a class="Store-links-item" href="">
      <img
        class="Store-links-item-apple"
        src="../../../img/apple.svg"
        alt="apple store link"
      />
    </a>
    <a class="Store-links-item" href="">
      <img
        class="Store-links-item-google"
        src="../../../img/google.svg"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "ShowcaseStoreLinks",
};
</script>

<style lang="scss">
@import "../../../assets/variable";
.Store-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  &-item {
    display: flex;
    transition: 0.2s;
    align-items: center;
    justify-content: center;
    background-color: rgba(black, 0.2);
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 10px;
    margin-left: 10px;
    height: 50px;
    &:hover {
      background-color: rgba(black, 0.4);
    }
    border-radius: $border-radius;
    &-apple {
      width: 90px;
    }
    &-google {
      width: 90px;
    }
  }
}
</style>
