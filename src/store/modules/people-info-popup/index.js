export default {
  state: {
      showPeopleInfoPopup:false
  },
  mutations: {
    setData (state, data) {
      state.showPeopleInfoPopup = data
    }
  }
}
