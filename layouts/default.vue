<template>
  <div class="main-container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
  import Header from "../components/header-component";

  export default {
    name: "default-layout",
    components: { Header },
    data (){
      return{

      }
    }

  }
</script>

<style>
.main-container {
  max-width: 192rem;
  margin: 0 auto;
  padding: 4.8rem 6.4rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
