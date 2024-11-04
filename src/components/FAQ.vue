<template>
  <section class="faq" id="duvidas">
    <h2>Dúvidas frequentes</h2>
    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <button @click="toggle(index)">
        <span class="faq-question">{{ item.question }}</span>
        <span class="faq-icon">
          <span v-if="!item.open">+</span>
          <span v-else>-</span>
        </span>
      </button>
      <transition name="fade">
        <div v-show="item.open" class="faq-answer">{{ item.answer }}</div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqItems: [
        { question: 'Pergunta 1', answer: 'Resposta para a pergunta 1', open: false },
        { question: 'Pergunta 2', answer: 'Resposta para a pergunta 2', open: false },
        { question: 'Pergunta 3', answer: 'Resposta para a pergunta 3', open: false },
        { question: 'Pergunta 4', answer: 'Resposta para a pergunta 4', open: false },
        { question: 'Pergunta 5', answer: 'Resposta para a pergunta 5', open: false },
        { question: 'Pergunta 6', answer: 'Resposta para a pergunta 6', open: false },
        { question: 'Pergunta 7', answer: 'Resposta para a pergunta 7', open: false },
        { question: 'Pergunta 8', answer: 'Resposta para a pergunta 8', open: false },
        { question: 'Pergunta 9', answer: 'Resposta para a pergunta 9', open: false },
        { question: 'Pergunta 10', answer: 'Resposta para a pergunta 10', open: false },
     
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
  },
};
</script>

<style scoped>
.faq {
  min-height: 100vh;
  padding: 20px;
  background-color: #9cc4e4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'baloo da 2';
  color: #1B325F
}

.faq-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

button {
  width: 75%;
  padding: 10px;
  font-size: 1em;
  font-weight: bold;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #005bb5;
}

.faq-question {
  flex-grow: 1;
  text-align: left;
}

.faq-icon {
  font-size: 1.5em;
  padding-left: 10px;
}

.faq-answer {
  width: 75%;
  padding: 15px;
  margin-top: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
  transform: scaleY(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
