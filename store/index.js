export const state = () => ({
  section: ''
})

export const mutations = {
  setSection(state, newSection) {
    state.section = newSection
  }
}
