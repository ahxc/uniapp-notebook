import { createStore } from 'vuex';

const store = createStore({
    state: {
        systemInfo: {},
        location: '沅江市南大膳镇沿河路南大米厂',
        username: "foo",
        age: 18
    },
    mutations: {
        setSystemInfo(state, value) {
            return state.systemInfo = value;
        },
    },
    actions: {

    },
    getters: {

    }
});

export default store;