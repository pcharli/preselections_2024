<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo-page">
      <img src="./assets/favicon.ico" alt="Logo">
    </div>
    <div class="wrapper">
      <nav class="test">
        <RouterLink to="/">Home</RouterLink>
        <!--<RouterLink to="/about">About</RouterLink>-->
        <RouterLink to="/reservation">Réservation</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
  <p>&copy; WorldSkills.be - 2024</p>
  </footer>
</template>

<style scoped lang="scss">
nav a {
  margin-right: 1rem;
}
.logo-page img {
  max-height: 200px;
}
.test a {
  color: #3DD2CC;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem;
}
.test a:hover, .test a.router-link-active {
  background-color: #3DD2CC;
  color: white;
}
header {
  margin-bottom: 4rem;
}
footer {
  text-align: center;
  background-color: #DDCDAC;
  min-height: 3rem;
  line-height: 3rem,;
}
</style>
