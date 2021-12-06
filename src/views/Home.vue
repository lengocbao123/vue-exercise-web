<template>
  <HeroSection />
  <FeatureSection />
  <CategorySection />
  <FeaturedProducts />
  <PromotionSection />
  <TestimonySection />
  <hr />
  <PartnerSection />
  <ContactSection />
</template>

<script>
import CategorySection from "../components/home/CategorySection.vue";
import ContactSection from "../components/home/ContactSection.vue";
import FeaturedProducts from "../components/home/FeaturedProducts.vue";
import FeatureSection from "../components/home/FeatureSection.vue";
import HeroSection from "../components/home/HeroSection.vue";
import PartnerSection from "../components/home/PartnerSection.vue";
import PromotionSection from "../components/home/PromotionSection.vue";
import TestimonySection from "../components/home/TestimonySection.vue";
export default {
  components: {
    HeroSection,
    FeatureSection,
    CategorySection,
    FeaturedProducts,
    PromotionSection,
    TestimonySection,
    PartnerSection,
    ContactSection,
  },
  name: "Home",
};
</script>

<style></style>
