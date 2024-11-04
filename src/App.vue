<template>
  <div id="app">
    <HeroSection />
    <ComoParticipar />
    <Premiacao />
    <FAQ />
    <ListaDeGanhadores />
    <Footer />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import ComoParticipar from './components/ComoParticipar.vue';
import Premiacao from './components/Premiacao.vue';
import FAQ from './components/FAQ.vue';
import ListaDeGanhadores from './components/ListaDeGanhadores.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    ComoParticipar,
    Premiacao,
    FAQ,
    ListaDeGanhadores,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Baloo+Da+2:wght@400..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&family=Tenor+Sans&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
