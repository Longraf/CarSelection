<template>
  <button class="button-plus">
    <p class="button-plus__text">{{ btnText }}</p>
    <div class="button-plus__icon"></div>
  </button>
</template>

<script>
  export default {
    name: 'button-text-plus',
    props: {
      btnText: String,
    },
  }
</script>

<style lang="scss">
  .button-plus{
    display: grid;
    grid-template-columns: 1fr 4.8rem;
    grid-gap: 2rem;
    align-items: center;
    border: none;
    background-color: transparent;

    cursor: pointer;
    transition: 0.3s border, 0.3s background-color, 0.3s color;

    &:active{
      .button-plus__icon{
        transform: translate(0.1rem, 0.1rem);
      }
    }

    &:focus{
      outline: none;
    }

    &:hover{
      .button-plus__icon{
        background: $white;
        color: $blue;
        border: 0.2rem solid $blue;

        &:after,
        &:before{
          background-color: $blue;
        }
      }
    }

    &__text{
      font-weight: bold;
      font-size: 2rem;
      line-height: 140%;

      color: $blue;
    }

    &__icon{
      width: 4.8rem;
      height: 4.8rem;
      background: $blue;
      border-radius: 1.6rem;
      border: 0.2rem solid transparent;
      position: relative;

      &:before, &:after{
        content: '';
        position: absolute;
        width: 1.4rem;
        height: 0.2rem;

        background-color: $white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);

        transition: 0.3s background-color, 0.3s color;
      }

      &:after{
        transform: translateX(-50%) rotate(90deg);
      }

      &:hover{

      }
    }
  }
</style>
