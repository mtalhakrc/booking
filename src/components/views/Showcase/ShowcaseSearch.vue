<template>
  <div class="Search">
    <form class="Search-form" action="">
      <div class="Search-item Search-item-grow">
        <div class="form-item">
          <svg class="icon icon-location form-item-icon">
            <use xlink:href="#icon-location"></use>
          </svg>
          <input class="text" type="text" />
        </div>
        <small class="form-item-description"
          >Destination, property name or address</small
        >
      </div>
      <div class="Search-item">
        <div class="form-item">
          <svg class="icon icon-calendar form-item-icon">
            <use xlink:href="#icon-calendar"></use>
          </svg>
          <input class="text" type="date" />
        </div>
        <small class="form-item-description">When</small>
      </div>
      <div class="Search-item">
        <div class="form-item">
          <svg class="icon icon-user form-item-icon">
            <use xlink:href="#icon-user"></use>
          </svg>
          <svg
            class="icon icon-chevron-thin-down form-item-icon form-item-icon-arrowdown"
          >
            <use xlink:href="#icon-chevron-thin-down"></use>
          </svg>
          <select class="text text-select" name="">
            <option value="">Guest</option>
          </select>
        </div>
      </div>

      <div class="Search-item">
        <div class="for-work">
          <label
            >Are you travelling for work?
            <div class="checkbox">
              <input class="form-item-checkbox" type="checkbox" />
              <svg class="icon icon-checkmark checkbox-icon">
                <use xlink:href="#icon-checkmark"></use>
              </svg>
            </div>
          </label>
        </div>

        <div class="form-item">
          <button type="submit" class="button button-navy">
            Let's get started
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "ShowcaseSearch",
};
</script>

<style lang="scss">
@import "../../../assets/variable";
@import "../../../assets/mixin";
.Search {
  padding: 30px;
  background-color: $color-yellow;
  @include mq("tablet") {
    padding: 60px;
  }

  box-shadow: 10px 5px 40px rgba(black, 0.4);
  &-form {
    display: flex;
    position: relative;
    flex-direction: column;
    @include mq("tablet") {
      flex-direction: row;
    }
  }
  &-item {
    width: 100%;
    //sen kendinden sonra gelirsen, güzel trick
    & + & {
      margin-top: 20px;
      @include mq("tablet") {
        margin-top: 0;
        margin-left: 20px;
      }
    }

    &-check {
      display: inline-flex;
      justify-content: center;
    }
  }
}

.form {
  &-item {
    position: relative;

    select {
      padding-right: 40px;
    }
    &-description {
      display: inline-block;
      margin-top: 10px;
      @include mq("tablet") {
        margin-top: 20px;
        font-size: $font-size-small;
      }
    }

    button {
      width: 100%;
    }

    &-icon {
      width: 24px;
      height: 24px;
      stroke: $color-navy;
      fill: $color-navy;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      left: 10px;

      &-arrowdown {
        left: 100%;
        padding: 5px;
        transform: translateY(-50%) translateX(-130%);
      }
    }
    .text {
      padding-left: 40px;
    }
  }
}

//ŞU FOR-WORK KISMI HARBİDEN BEYİN YAKAN BİR KISIM BURAYA TEKRAR ET KENDİN DENE BİR DAHA YAZ ÖNEMLİ!!!
.for-work {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @include mq("tablet") {
    position: absolute;
    z-index: 10;
    right: 0;

    //BURASI DA ÖNEMLİ BURAYI DA ARAŞTIR BENİMSE YAZ
    top: calc($finger-size + 20px);
  }

  label {
    display: flex;
    align-items: center;
  }

  .checkbox {
    display: inline-flex;
    position: relative;
    margin-left: 10px;
    &::before {
      content: "";
      display: inline-block;
      font-size: 20px;
      pointer-events: auto;
      height: 1em;
      width: 1em;
      border: 2px solid white;
    }
    input {
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
    }
    &-icon {
      display: none;
      position: absolute;
      width: 20px;
      height: 20px;
      fill: white;
      stroke: white;
      left: 6px;
      top: 0;
    }
    input:checked + .icon {
      display: inline-block;
    }
  }
}
</style>
