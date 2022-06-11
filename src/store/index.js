import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  // this is where all the data for the app is stored
  state: {
    counter: 0,
    colorCode: 'red'
  },
  // these are the methods that can change the data (only synchronous code)( commit matation )
  mutations: {
    increaseCounter(state, randomNumber){
      // console.log(randomNumber)
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber){
      state.counter -= randomNumber
    },
    setColorCode(state, newValue){
      state.colorCode = newValue  
    }
  },
  // this can have async code once thats done we can commit a mutation in here ( dispatching )
  actions: {
    increaseCounter({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('increaseCounter', response.data);  
        })  
    },
    decreaseCounter({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('decreaseCounter', response.data);  
        })  
    },
    setColorCode({ commit }, newValue){
      commit('setColorCode', newValue)
    }
  },
  // we can can get data from state
  getters: {
    counterSquared(state){
      return state.counter * state.counter
    }  
  },
  // breakup the store to modules with individual state, mutation, getters
  modules: {
  }
})
