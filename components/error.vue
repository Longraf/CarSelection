<template>
  <div class="error">
    <p class="error__title">An error has occurred</p>
    <p class="error__text">Please refresh the page</p>
    <ButtonDefault
      class="error__button button"
      :btnText="'Reload page'"
      @click="reloadPage()"
    />
  </div>
</template>

<script>
  import ButtonDefault from './button-default'

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'error-page',
    components: { ButtonDefault },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        UpdateProdItems: 'UpdateProdItems'
      }),
      reloadPage(){
        this.UpdateProdItems();
      }
    }
  }
</script>

<style lang="scss">
  .error{
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;

    &__title{
       font-weight: bold;
       font-size: 4.0rem;
       line-height: 120%;

       color: $black;
       text-align: center;
    }

    &__text{
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 146%;

      color: $gray;
      text-align: center;

      margin: 1.6rem 0 3.2rem;
    }

    &__button{
      margin: 0 auto;
    }
  }
</style>
