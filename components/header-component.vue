<template>
  <header class="header">
    <svg-icon class="header__logo" name="logo-big"/>
    <div class="header__info">
      <div class="header__info-options">
        <div class="header__info-item header__info-item--big">
          <svg-icon name="moon"/>
          <span class="header__item-text">Night mod</span>
        </div>
        <div class="header__info-item">
          <svg-icon class="header__info-item" name="message"/>
        </div>
        <div class="header__info-item">
          <svg-icon class="header__info-item" name="notification"/>
        </div>



      </div>
    </div>
    <div class="header__user">
      <span class="header__user-text text-bold">Bessie Cooper</span>
      <img src="~assets/images/user-avatar.png" alt="user-avatar">
    </div>
  </header>
</template>

<script>

  export default {
    name: 'header-component',
    data() {
      return {

      }
    }
  }

</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 5.6rem;

    display: grid;
    grid-template-columns: 17rem 1fr 18rem;
    align-items: center;

    &__logo{
      display: flex;
      align-items: center;

      height: 4.8rem;
      width: 17rem;
    }

    &__info{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 5.6rem;
    }

    &__info-options{
      max-width: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 2.4rem 2.4rem;
      grid-gap: 2.4rem;
      justify-items: flex-end;
    }

    &__info-item{
      display: grid;
      grid-template-columns: 2.4rem 1fr;
      align-items: center;
      grid-gap: 1.6rem;
      height: 2.4rem;

      &--big{

      }

      svg{
        width: 2.4rem;
      }
    }

    &__user{
      display: grid;
      grid-template-columns: 1fr 5.6rem;
      grid-gap: 1.6rem;
      align-items: center;
      justify-items: flex-end;
    }

    &__user-text{
      display: block;
      color: $black;
    }
  }
</style>
