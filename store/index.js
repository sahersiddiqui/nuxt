export const state = () => ({
    counter: 0,
    user: []
})

export const mutations = {
    test(state, text) {
        state.counter = text
    }
}

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    }
}