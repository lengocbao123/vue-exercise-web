<template>
  <HeroSection />
  <section class="ftco-section ftco-cart">
    <div class="container">
      <ItemsSection />
      <FormSection />
    </div>
  </section>
</template>

<script>
import FormSection from "../components/cart/FormSection.vue";
import HeroSection from "../components/cart/HeroSection.vue";
import ItemsSection from "../components/cart/ItemsSection.vue";
export default {
  components: { HeroSection, ItemsSection, FormSection },
};
</script>
