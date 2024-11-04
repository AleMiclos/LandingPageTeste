<template>
  <section class="como-participar" id="participar">
    <h2>Como Participar</h2>
    <section class="secao4" id="sobre">
      <div class="secao4-div">
        <!-- Card 1 -->
        <div class="secao4-div-card">
          <h3>1º</h3>
          <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
          <p>Gaste R$1000,00 em compras.</p>
        </div>

        <!-- Card 2 -->
        <div class="secao4-div-card">
          <h3>2º</h3>
          <font-awesome-icon class="icon" icon="fa-solid fa-ticket" />
          <p>Realize seu registro no sorteio.</p>
        </div>

        <!-- Card 3 -->
        <div class="secao4-div-card">
          <h3>3º</h3>
          <font-awesome-icon class="icon" icon="fa-solid fa-clover" />
          <p>Receba seu número da sorte.</p>
        </div>

        <!-- Card 4-->
        <div class="secao4-div-card">
          <h3>4º</h3>
          <font-awesome-icon class="icon" icon="fa-solid fa-hourglass-start" />
          <p>Agora só aguardar!</p>
        </div>
      </div>
    </section>
    <CTAButton @click="irParaCadastro" />
  </section>
</template>

<script>
import CTAButton from './Button.vue'

export default {
  name: 'ComoParticipar',
  components: { CTAButton },
}
</script>

<style scoped>
.como-participar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  background-color: #9cc4e4;
  gap: 3em;
  padding: 2em;
  color: #1b325f;
}

.como-participar h2 {
  font-family: "Baloo Da 2", sans-serif;
  font-size: 2.5em;
  text-align: center;
}

.secao4-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
}

.secao4-div-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 18em;
  height: 20em;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  background-color: rgb(238, 229, 187);
  transition: all 0.3s ease;
}

.secao4-div-card:hover {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.8);
}

.secao4-div-card h3 {
  background-color: rgb(69, 10, 179);
  width: 100%;
  padding: 10px 0;
  color: white;
  font-size: 1.5em;
}

.secao4-div-card p {
  font-family: "Baloo Da 2", sans-serif;
  font-size: 1.2em;
  padding: 0 1em;
  text-align: center;
}

.icon {
  width: 40%;
  height: 40%;
}

@media (max-width: 1300) {
  .secao4-div {
    flex-direction: column;
    align-items: center;
  }

  .secao4-div-card {
    width: 80%;
    height: auto;
    padding: 1em;
  }

  .como-participar h2 {
    font-size: 2em;
  }

  .secao4-div-card h3 {
    font-size: 1.3em;
  }

  .secao4-div-card p {
    font-size: 1em;
  }

  .icon {
    width: 30%;
    height: 30%;
  }
}


</style>
