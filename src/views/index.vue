<template>
  <div>
    <TheHeader />
    <TheNavigation />
    <TheShowcase />
    <TheHighlights />
    <TheDescriptions />
    <TheDestinations />
    <SubDescriptions />
    <TheDiscover />
    <TheApartHotels />
    <WhereToStay />
    <TheCities />
  </div>
</template>

<script>
import TheHeader from "@/components/Header/Header.vue";
import TheNavigation from "@/components/Nav/Nav.vue";
import TheShowcase from "@/components/Showcase/Showcase.vue";
import TheHighlights from "@/components/Highligths/Higlights.vue";
import TheDescriptions from "@/components/Descriptions/Descriptions.vue";
import TheDestinations from "@/components/Destinations/Destinations.vue";
import SubDescriptions from "@/components/SubDescriptions.vue";
import WhereToStay from "@/components/WhereToStay.vue";
import TheApartHotels from "@/components/Aparthotels/ApartHotels.vue";
import TheDiscover from "@/components/Discover/Discover.vue";
import TheCities from "@/components/Cities.vue";

export default {
  name: "MasterPage",
  components: {
    TheCities,
    TheDiscover,
    TheApartHotels,
    WhereToStay,
    SubDescriptions,
    TheDestinations,
    TheDescriptions,
    TheHighlights,
    TheShowcase,
    TheNavigation,
    TheHeader,
  },
};
</script>

<style scoped lang="scss"></style>
