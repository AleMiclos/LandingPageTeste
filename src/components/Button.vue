<template>
    <button class="cta-button" @click="handleNavigation('seção-desejada')">Participar</button>
</template>

<script>
export default {
  name: 'CTAButton',
  methods: {
    handleNavigation(section) {
      console.log(`Navegar para a seção: ${section}`);
    }
  }
};
</script>

<style scoped>


.cta-button {
  padding: 12px 10%;
  font-size: 1.2em;
  color: white;
  background-color: #002B70;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
  border: solid 1px white;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  z-index: 1;
}

.cta-button:hover {
  background-color: #1673E4;
  transform: scale(1.05);
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.8);
}


</style>
