<template>
  <section class="premiacao" id="premios">
    <h2>Prêmios</h2>
    <div class="premiacao-intro">
      <p>Participe e concorra a prêmios incríveis! Veja abaixo o que você pode ganhar.</p>
    </div>
    <div class="prizes">
      <div class="prize-item">
        <img src="../assets/img/smart-watch_5832038.png" class="w-25" alt="Prêmio 3">
        <h3>Troféu de Ouro</h3>
        <p>O maior prêmio para o campeão do concurso!</p>
      </div>
      <div class="prize-item">
        <img src="../assets/img/smart-watch_5832038.png" class="w-25" alt="Prêmio 3">
        <h3>Medalha de Prata</h3>
        <p>Reconhecimento para o segundo lugar!</p>
      </div>
      <div class="prize-item">
        <img src="../assets/img/smart-watch_5832038.png" class="w-25" alt="Prêmio 3">
        <h3>Medalha de Bronze</h3>
        <p>Para todos os participantes, uma medalha de honra!</p>
      </div>
    </div>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/img/Banner Paisagem.png" class="d-block w-100" alt="Prêmio 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Prêmio 1</h5>
            <p>Descrição do prêmio 1.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/img/Banner Paisagem.png" class="d-block w-100" alt="Prêmio 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Prêmio 2</h5>
            <p>Descrição do prêmio 2.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/Banner Paisagem.png" class="d-block w-100" alt="Prêmio 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Prêmio 3</h5>
            <p>Descrição do prêmio 3.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
    <CTAButton @click="irParaCadastro" class="cta-button" />
  </section>
</template>

<script>
import CTAButton from './Button.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Premiacao',
  components: {
    CTAButton,
  },
};
</script>

<style scoped>
.premiacao {
  min-height: 100vh;
  background: #e9f2f9; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.premiacao-intro {
  text-align: center;
  margin-bottom: 20px;
}

.premiacao-intro p {
  font-size: 20px;
  color: #1B325F;
  max-width: 600px;
}

.prizes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.prize-item {
  text-align: center;
  margin: 10px;
  flex: 1 1 200px;
}

.prize-icon {
  width: 100px;
  height: auto;
}

.carousel {
  position: relative;
  width: 80%;
  max-width: 750px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); 
}

.premiacao h2 {
  font-size: 65px;
  font-family: "baloo da 2", sans-serif;
  color: #1B325F;
  margin-bottom: 20px;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.cta-button {
  margin-top: 20px;
}

.prize-item:hover img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>
