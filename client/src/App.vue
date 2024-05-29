<template>
  <div id="app">
    <h1>Тестирование socket.io + vue</h1>
    <button @click="sendMessage">Отправить сообщение</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$socket.on('connect', () => {
      console.log('Успешное подключение к серверу');
    });

    this.$socket.on('disconnect', () => {
      console.log('Отключение от сервера');
    });
  },
  methods: {
    sendMessage() {
      console.log('Отправляем сообщение на сервер...');
      this.$socket.emit('message', 'Привет, я клиент!');
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
