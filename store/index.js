export const state = () => ({
    counter: 0
})

export const mutations = {
    test(state, text) {
        state.counter = text
    }
}