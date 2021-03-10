import { getVehicles } from '../scripts/request'

export default {
  state: {
    prodItems: []
  },

  actions: {
    UpdateProdItems({ commit }) {

      return getVehicles().then( (resolve) => {
          commit('SetProdItems', resolve)
        }
      ).catch( (reject) => {
        console.log(reject)
        commit('SetProdItems', reject)
      })
    }
  },

  mutations: {
    SetProdItems(state, data) {
      state.prodItems = data;
    }
  },

  getters: {
    prodItems: state => state.prodItems
  },
}
