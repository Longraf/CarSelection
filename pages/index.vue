<template>
  <div class="container">
    <error-component v-if="prodItems.hasOwnProperty('error')"/>

    <section class="main-page" v-else>
      <div class="main-page__title-area">
        <div class="main-title">
          <span>Rent </span>
          <select
            class="main-page__select"
            ref="main-page__select"
            v-model="selectedType"
          >
            <option
              v-for="(item, index) in prodType"
              :key="index"
              :value="item"
              selected
            >
              {{item}}
            </option>
          </select>
        </div>
        <btn-plus-text :btn-text="'Add new'"/>
      </div>

      <div class="main-page__content">
        <div
          class="product-item"

          v-for="(item, index) in prodItems"
          :key="index"
          v-if="item.type === selectedType"
        >
          <img
            class="product-item__img"
            :src="item.preview"
            :alt="item.description">
          <div class="product-item__text-area">
            <h3 class="product-item__title">{{item.name}}</h3>
            <p class="product-item__description">{{item.description}}</p>
            <p class="product-item__rent">{{item.rent}} $/h</p>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  import ErrorComponent from '../components/error'
  import BtnPlusText from '../components/button-text-plus'
  import { mapGetters, mapActions } from 'vuex';


  export default {
    name: 'main-page',
    components: { ErrorComponent, BtnPlusText },
    data() {
      return {
        selectedType: ''
      }
    },
    async mounted() {
      await this.UpdateProdItems();
      if (!this.prodItems.hasOwnProperty('error')){
        this.selectedType = this.prodItems[0].type;
      }

    },
    computed: {
      ...mapGetters({
        prodItems: 'prodItems',
      }),

      prodType() {
        let uniqueTypes = []
        this.prodItems.forEach((item) => {
          uniqueTypes.push(item.type);
        })
        return uniqueTypes.filter(this.onlyUnique)
      },

    },
    methods: {
      ...mapActions({
        UpdateProdItems: 'UpdateProdItems'
      }),

      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },
    }
  }
</script>

<style lang="scss">
  .main-page{
    &__title-area{
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;
    }

    &__content{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3.2rem 3.2rem;
    }

    &__select{
      font-weight: bold;
      font-size: 4.0rem;
      line-height: 120%;

      color: $blue;
      background-color: transparent;

      border: none;

      option{
        font-weight: bold;
        height: 14rem;
      }

      &:focus{
        outline: none;
      }
    }
  }

  .product-item{
    background-color: $white;
    padding: 2.4rem 3.2rem;
    border-radius: 3.2rem;

    display: grid;
    grid-template-columns: 28.5% 63.75%;
    grid-gap: 7.75%;

    &__img{
      max-width: 100%;

      border-radius: 2.4rem;
    }

    &__title{
      margin-top: 1.6rem;

      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.4rem;

      color: $black;

      user-select: none
    }

    &__description{
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 148%;

      color: $gray;

      padding: 1.2rem 0 1.6rem;

      user-select: none
    }

    &__rent{
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 148%;

      color: $purple;

      user-select: none
    }
  }

  .main-title{
    font-weight: bold;
    font-size: 4.0rem;
    line-height: 120%;
  }

  .container {
    background-color: #F3F4F7;
    border-radius: 4.8rem;
    padding: 5.6em 6.4rem;
  }
</style>
