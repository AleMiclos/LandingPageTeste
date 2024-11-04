<template>
  <section class="hero-section" id="home">
    <div class="hero-banner">
      <MainMenu @navigate="handleNavigation" />

      <img src="../assets/img/Banner Paisagem.png" alt="banner" class="banner-image" />

      <img src="../assets/img/BannerMobile.jpeg" alt="banner mobile" class="banner-image-mobile" />

      <CTAButton @click="irParaCadastro" class="cta-button-overlay" />
    </div>
  </section>
</template>

<script>
import MainMenu from './MainMenu.vue';
import CTAButton from './Button.vue';

export default {
  name: 'HeroSection',
  components: {
    MainMenu,
    CTAButton,
  },
};
</script>

<style scoped>
.hero-section {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.hero-banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-image-mobile {
  display: none; 
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-button-overlay {
  position: absolute;
  padding: 12px 10%;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  z-index: 10;
}

.cta-button-overlay:hover {
  background-color: #1673E4;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.8);
  transform: translateX(-50%);
}

@media (max-width: 1300px) {
  .banner-image {
    display: none; 
  }

  .banner-image-mobile {
    display: block; 
  }
}
</style>
