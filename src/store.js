import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
            context.commit('increment', data)
        },
        decrement(context) {
            context.commit('decrement')
        },
        incrementAsync(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        tripleCount(state) {
            return state.count * 3
        }
    }
})

export default store
