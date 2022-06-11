<template>
  <div class="buttons">
      <!-- commit is the muttation method -->
      <!-- <button @click="$store.commit('decreaseCounter')">-</button> -->
      <!-- commit is the muttation method -->
      <!-- <button @click="$store.commit('increaseCounter')">+</button> -->

      <!-- dispatch is the action method -->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <!-- dispatch is the action method -->
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>