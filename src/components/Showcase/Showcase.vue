<template>
  <div class="Showcase">
    <div class="container">
      <h1 class="Showcase-title">More deals than days in a year</h1>
      <h3 class="Showcase-subtitle">
        From cousy Sountry homes to funky city flats
      </h3>
      <ShowcaseSearch />
      <ShowcaseLinks />
      <ShowcaseStoreLinks />
    </div>
  </div>
</template>

<script>
import ShowcaseSearch from "@/components/Showcase/ShowcaseSearch.vue";
import ShowcaseLinks from "@/components/Showcase/ShowcaseLinks.vue";
import ShowcaseStoreLinks from "@/components/Showcase/ShowcaseStoreLinks.vue";

export default {
  name: "TheShowcase",
  components: {
    ShowcaseStoreLinks,
    ShowcaseLinks,
    ShowcaseSearch,
  },
};
</script>

<style lang="scss">
@import "../../assets/variable";
@import "../../assets/mixin";
.Showcase {
  background: #083b87 url("../../img/showcase_back.jpg") no-repeat center
    center/cover;
  color: white;
  padding-top: 80px;
  padding-bottom: 100px;

  @include mq("tablet") {
    padding-bottom: 150px;
  }

  h1 {
    font-size: 50px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 40px;
  }

  //todo bg image'nin olduğu container'a padding verme mevzusu hadi bakalım araştır!
  .container {
  }

  &-title,
  &-subtitle {
    text-align: center;
  }
}
</style>
