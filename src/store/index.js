import Vue from 'vue'
import Vuex from 'vuex'
import usuario from "@/store/usuario.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      usuario
    },
    state: {
        count: 0
    },
    mutations: {
        increment(state, data) {
            state.count += data
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        increment(context, data) {
            context.commit("increment", data)
        },
        decrement(context) {
            context.commit("decrement")
        },
        incrementAsync(context, data) {
            setTimeout(() => {
                context.commit("increment", data)
            }, 1000)
        }
    },
    getters: {
        normalCount(state) {
            return state.count
        },
        doubleCount(state) {
            return state.count * 2
        },
        tripleCount(state) {
            return state.count * 3
        }
    }
})

export default store
