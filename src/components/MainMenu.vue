<template>
  <nav class="main-nav" :class="{ hidden: isHidden }">
    <a @click="navigate('home')" href="javascript:void(0)"><img src="../assets/img/logo-grupo-polgo.webp" alt="logo"></a>
    <nav id="nav">
      <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu"
        :aria-expanded="isMenuOpen" @click="toggleMenu">
        <span id="hamburger"></span>
      </button>
      <ul id="menu" role="menu" :class="{ active: isMenuOpen }">
        <li><a @click="navigate('home')" href="javascript:void(0)">Home</a></li>
        <li><a @click="navigate('participar')" href="javascript:void(0)">Como Participar</a></li>
        <li><a @click="navigate('premios')" href="javascript:void(0)">Prêmios</a></li>
        <li><a @click="navigate('duvidas')" href="javascript:void(0)">Dúvidas</a></li>
        <li><a @click="navigate('ganhadores')" href="javascript:void(0)">Ganhadores</a></li>
        <li><a @click="navigate('contato')" href="javascript:void(0)"><font-awesome-icon icon="fa-solid fa-user" />
            Login / Cadastro</a></li>
      </ul>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      lastScrollY: 0,
      isHidden: false,
      isMenuOpen: false,
      isMobileView: false
    }
  },
  methods: {
    toggleMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      this.isMenuOpen = !this.isMenuOpen;

      const button = event.currentTarget;
      const active = this.isMenuOpen;
      button.setAttribute('aria-expanded', active);
      button.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
    },
    handleScroll() {

      this.isHidden = window.scrollY > this.lastScrollY;
      this.lastScrollY = window.scrollY;
    },
    checkMobileView() {
      this.isMobileView = window.innerWidth <= 600;
    },
    navigate(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (this.isMobileView) {
        this.isMenuOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.checkMobileView);
    this.checkMobileView();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkMobileView);
  }
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
}

a:hover {
  transform:scale(1.05);
}

#logo {
  width: 120px;
  height: 70px;
}

.main-nav {
  box-sizing: border-box;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
  font-family: 'baloo da 2';
}

.hidden {
  transform: translateY(-100%);
}

#nav {
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

#menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
  align-items: center;
}

#btn-mobile {
  display: none;
}

@media (max-width: 1300px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: max-height 0.6s ease, visibility 0.6s ease;
    z-index: 1000;
    max-height: 0;
    visibility: hidden;
    overflow-y: hidden;
    padding: 0;
  }

  #menu.active {
    max-height: 400px;
    visibility: visible;
    overflow-y: auto;
  }

  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    text-align: center;
  }

  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }

  #hamburger {
    border-top: 2px solid white;
    width: 20px;
  }

  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }

  #nav.active #hamburger {
    border-top-color: transparent;
  }

  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }

  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
