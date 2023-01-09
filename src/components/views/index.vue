<template>
  <div>
    <TheHeader />
    <TheNavigation />
    <TheShowcase />
    <TheHighlights />
    <DescriptionComponent />
    <TheDestinations />
    <SubDescriptions />
    <DiscoverComponent />
    <ApartHotelsComponent />
    <WhereToStay />
    <CitiesComponent />
  </div>
</template>

<script>
import TheShowcase from "@/components/views/Showcase/index.vue";
import CitiesComponent from "@/components/CitiesComponent.vue";
import WhereToStay from "@/components/WhereToStay.vue";
import ApartHotelsComponent from "@/components/ApartHotelsComponent.vue";
import DiscoverComponent from "@/components/DiscoverComponent.vue";
import SubDescriptions from "@/components/SubDescriptions.vue";
import DescriptionComponent from "@/components/views/Descriptions/index.vue";
import TheNavigation from "@/components/views/Nav/index.vue";
import TheHeader from "@/components/views/Header/HeaderComponent.vue";
import TheHighlights from "@/components/views/Highligths/index.vue";
import TheDestinations from "@/components/views/Destinations/index.vue";

export default {
  name: "MasterPage",
  components: {
    TheDestinations,
    TheHighlights,
    TheHeader,
    TheNavigation,
    TheShowcase,
    CitiesComponent,
    WhereToStay,
    ApartHotelsComponent,
    DiscoverComponent,
    SubDescriptions,
    DescriptionComponent,
  },
};
</script>

<style scoped lang="scss"></style>
