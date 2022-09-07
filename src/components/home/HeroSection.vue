<template>
  <section id="home-section" class="hero">
    <div class="home-slider owl-carousel">
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="slider-item"
        :style="{
          backgroundImage: `url(${slideBackground(slide.background)})`,
        }"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div class="col-md-12 ftco-animate text-center">
              <h1 class="mb-2">{{ slide.title }}</h1>
              <h2 class="subheading mb-4">
                {{ slide.description }}
              </h2>
              <p>
                <router-link :to="slide.url" class="btn btn-primary"
                  >View Details</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "We serve Fresh Vegestables & Fruits",
          description: "We deliver organic vegetables & fruits",
          background: "bg_1.jpg",
          url: "/",
        },
        {
          id: 2,
          title: "100% Fresh &amp; Organic Foods",
          description: "We deliver organic vegetables &amp; fruits",
          background: "bg_2.jpg",
          url: "/",
        },
      ],
    };
  },
  methods: {
    slideBackground(fileName) {
      return require(`@/assets/images/${fileName}`);
    },
  },
};
</script>

<style scoped></style>
