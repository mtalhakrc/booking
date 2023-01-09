<template>
  <div class="WhereToStay">
    <div class="container">
      <h1 class="WhereToStay-title">Still deciding where to stay?</h1>
      <h3 class="WhereToStay-subtitle">
        We want to make your decision easier! With over 131,150,000 verified
        guest reviews, we can help you find the perfect place to stay.
      </h3>
      <div class="WhereToStay-buttons">
        <a href="" type="button" class="WhereToStay-buttons-item">
          Hotel reviews
        </a>
        <a
          href=""
          type="button"
          class="WhereToStay-buttons-item navy no-bg hover"
        >
          B&B & in reviews
        </a>
        <a
          href=""
          type="button"
          class="WhereToStay-buttons-item navy no-bg hover"
        >
          Holiday rental reviews
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhereToStay",
};
</script>

<style scoped lang="scss">
@import "../assets/variable.scss";
@import "../assets/mixin.scss";
.WhereToStay {
  margin-bottom: 200px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mq("tablet") {
      width: 40%;
    }
  }
  &-title {
    color: $color-navy;
    font-weight: bold;
    text-align: center;
  }
  &-subtitle {
    color: rgba(gray, 0.5);
    text-align: center;
    font-weight: normal;
    line-height: 1.4;
  }
  &-buttons {
    display: flex;
    flex-direction: column;
    @include mq("tablet") {
      flex-direction: row;
    }
    &-item {
      border: none;
      height: $finger-size;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-navy;
      color: white;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: $border-radius;

      @include mq("tablet") {
        padding: 20px 15px;
        height: auto;
      }

      & + & {
        margin-top: 15px;
        @include mq("tablet") {
          margin-top: 0;
          margin-left: 15px;
        }
      }
    }
  }
}
.navy {
  color: $color-navy;
}
.no-bg {
  background-color: transparent;
}
.hover {
  transition: 0.2s;
  &:hover {
    background-color: rgba(gray, 0.5);
  }
}
</style>
