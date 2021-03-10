<template>
  <button @click="() => this.$emit('click')">{{ btnText }}</button>
</template>

<script>
  export default {
    name: 'button-default',
    props: {
      btnText: String,
    },
  }
</script>

<style lang="scss">
  button.button{
    cursor: pointer;
    border-radius: 1.2rem;
    border: 0.2rem solid transparent;
    background-color: $blue;
    padding: 1.6rem 2.4rem;

    color: $white;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.2rem;

    transition: 0.3s border, 0.3s background-color, 0.3s color;

    &:hover,
    &:active{
      background-color: $white;
      color: $blue;
      border: 0.2rem solid $blue;
    }

    &:focus{
      outline: none;
    }

    &:active{
      transform: translate(0.1rem, 0.1rem);
    }
  }
</style>
