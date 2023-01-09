<template>
  <div class="Descriptions">
    <span style="color: red"
      >BURAYI DA SOR. aynı ölçüleri alamsına rağmen bu leş gibi
      görünüyor.neden?</span
    >
    <div class="container">
      <div class="Descriptions-item bg-white">
        <div class="Descriptions-item-title">
          New deals listed daily - for every budget
        </div>
        <div class="Descriptions-item-subtitle">
          No booking fees / Save money! <a href="">We Price Match</a>
        </div>
      </div>

      <div class="Descriptions-item">
        <div class="Descriptions-item-title">
          <span class="blue">1,490,411 </span>
          properties worldwide
        </div>
        <div class="Descriptions-item-subtitle">
          Including 829,668 holiday rentals in 121,734 destinations in 299
          countries <a href="" class="blue">List your property</a>
        </div>
      </div>

      <div class="Descriptions-item">
        <div class="Descriptions-item-title">
          Make changes to your booking, anytime
        </div>
        <div class="Descriptions-item-subtitle">
          you can make changes, <a href="">send a request or cancel</a> in just
          few clicks
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDescriptions",
};
</script>

<style lang="scss">
@import "../../../assets/variable";
@import "../../../assets/mixin";
.Descriptions {
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 50px;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq("tablet") {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    //justify-content: center;
    width: 350px;
    padding: 20px 30px 30px;
    align-items: start;

    background-color: inherit;
    & + & {
      margin-top: 30px;
    }
    @include mq("tablet") {
      & + & {
        margin-top: 0;
      }
    }
    &-title {
      font-size: 20px;
      color: $color-navy;
      font-weight: bold;
      line-height: 1.5;
    }
    &-subtitle {
      margin-top: 15px;
      //font-size: $font-size-small;
      line-height: 1.5;

      a {
        color: $color-blue;
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}
.bg-white {
  box-shadow: 0 5px 10px rgba(black, 0.2);

  background-color: white;
}
a {
  &:hover {
    text-decoration: none;
  }
}
.blue {
  color: $color-blue;
}
</style>
