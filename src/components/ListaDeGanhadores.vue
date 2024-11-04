<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <section class="ganhadores" id="ganhadores">
    <div class="winner-list">
      <h3>Lista de Ganhadores</h3>

      <!-- Spinner de Carregamento -->
      <div v-if="loading" class="loading-spinner">
        Carregando...
      </div>

      <!-- Botão para Adicionar Novo Ganhador -->
      <button class="add-winner-button" @click="showAddForm = !showAddForm">
        {{ showAddForm ? 'Cancelar' : 'Adicionar Ganhador' }}
      </button>

      <!-- Formulário para Adicionar Novo Ganhador -->
      <div v-if="showAddForm" class="add-winner-form">
        <h4>Adicionar Novo Ganhador</h4>
        <form @submit.prevent="addWinner">
          <input v-model="newWinner.name" placeholder="Nome" required />
          <input v-model="newWinner.prize" placeholder="Prêmio" required />
          <input type="date" v-model="newWinner.date" required />
          <button type="submit">Adicionar</button>
        </form>
      </div>

      <!-- Lista de Ganhadores -->
      <div v-if="!loading" v-for="(winner, index) in winners" :key="winner._id" class="accordion-item">
        <button class="accordion-button" @click="toggleAccordion(index)">
          {{ winner.name }}
        </button>
        <div class="accordion-content" v-if="expandedIndex === index">
          <p><strong>Prêmio:</strong> {{ winner.prize }}</p>
          <p><strong>Data:</strong> {{ new Date(winner.date).toLocaleDateString() }}</p>
          <button class="remove-button" @click="removeWinner(winner._id)">Remover</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      winners: [],
      expandedIndex: null,
      showAddForm: false,
      newWinner: {
        name: '',
        prize: '',
        date: ''
      },
      loading: true, 
    };
  },
  methods: {
    async fetchWinners() {
      try {
        this.loading = true; 
        const response = await axios.get('https://winnersapi.onrender.com/winners');
        this.winners = response.data;
      } catch (error) {
        console.error("Erro ao carregar ganhadores:", error);
      } finally {
        this.loading = false; 
      }
    },
    toggleAccordion(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
    async removeWinner(id) {
      try {
        await axios.delete(`https://winnersapi.onrender.com/winners/${id}`);
        this.fetchWinners();
      } catch (error) {
        console.error("Erro ao remover ganhador:", error);
      }
    },
    async addWinner() {
      try {
        await axios.post('https://winnersapi.onrender.com/winners/add', this.newWinner);
        this.fetchWinners();
        this.newWinner = { name: '', prize: '', date: '' };
        this.showAddForm = false;
      } catch (error) {
        console.error("Erro ao adicionar ganhador:", error);
      }
    },
  },
  created() {
    this.fetchWinners();
  },
};
</script>

<style>
.ganhadores {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f7fc;
  font-family: 'baloo da 2';
}

.winner-list {
  width: 60%;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  font-size: 20px;
  color: #007bff;
  margin: 20px;
}

.add-winner-button {
  padding: 8px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 15px;
}

.add-winner-button:hover {
  background-color: #0056b3;
}

.add-winner-form {
  background-color: #f8f9fa;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.add-winner-form h4 {
  margin-top: 0;
}

.add-winner-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-winner-form button {
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-item {
  margin-bottom: 15px;
  padding: 15px;
  font-size: 20px;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
}

.accordion-item:hover {
  background-color: #549dec;
}

.accordion-content {
  padding: 15px;
  background-color: #f8f9fa;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  color: black;
}

.accordion-button {
  color: black; 
  font-weight: bold;
  border-bottom: solid 2px black;
}

.remove-button {
  background-color: #dc3545;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 12px;
}

.remove-button:hover {
  background-color: #c82333;
}

@media (max-width: 1300px) {
  .winner-list {
    width: 90%;
  }
  
  .accordion-button, .remove-button {
    font-size: 16px;
    color: black;
  }
}
</style>
