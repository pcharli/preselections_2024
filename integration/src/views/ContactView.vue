<template>
  <div class="reservation">
    <h1>Réservation</h1>
    <img src="@/assets/reservation.png" alt="Réservation" class="logo">
    <TestForm />
  </div>
</template>

<script setup>
import TestForm from '@/components/TestForm.vue';

</script>

<style>
.logo {
  right:20rem;
  position: absolute;
  top:10px;
  transform: rotate(45deg);
  filter: drop-shadow(5px 5px 5px #222);
}

</style>
