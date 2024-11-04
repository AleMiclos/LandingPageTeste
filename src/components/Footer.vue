<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="../assets/img/logo-grupo-polgo.webp" alt="logo">
    </div>

    <div class="footer-termos">
      <a href="#">Termos de Uso</a>
      <a href="#">Política de Privacidade</a>
      <a href="#">Redes Sociais</a>
      <a>SRE: 0000000000</a>
    </div>

    <div class="footer-social">
      <div class="links">
        <a href="/"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
        <a href="/"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="/"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      </div>
      <div class="navegação">
        <ul class="menu-list">
          <li><a href="#home" @click="navigate('home')">Home</a></li>
          <li><a href="#participar" @click="navigate('participar')">Como Participar</a></li>
          <li><a href="#premios" @click="navigate('premios')">Prêmios</a></li>
          <li><a href="#duvidas" @click="navigate('duvidas')">Dúvidas Frequentes</a></li>
          <li><a href="#ganhadores" @click="navigate('ganhadores')">Ganhadores</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  methods: {
    navigate(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  background-color: #002B70;
  color: white;
  padding: 20px;
  font-size: 1.2em;
  font-family: 'baloo da 2';
}

.footer-logo img {
  max-width: 140px;
}

.footer a {
  color: white;
  text-decoration: none;
  margin: 8px 0;
}

.footer a:hover {
  color: wheat;
}

.footer-termos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer-social {
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  gap: 1em;
  font-size: 1.5em;
}

.navegação {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-transform: uppercase;

}

.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: left;
}

@media (max-width: 1300px) {
  footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1em;
  }

  .footer-termos {
    margin: 15px 0;
  }

  .links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  footer {
    font-size: 0.9em;
    padding: 15px;
    text-align: center;
  }

  .footer-logo img {
    max-width: 120px;
  }

  .links {
    font-size: 1em;
    gap: 0.5em;
  }

  .footer-termos a {
    font-size: 0.9em;
  }

  .navegação {
    font-size: 0.9em;
  }

  .menu-list {
    text-align: center;
  
  }

  .footer-social {
    flex-direction: column-reverse;
  }
}
</style>
