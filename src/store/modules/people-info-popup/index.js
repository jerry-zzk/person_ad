export default {
  state: {
      showPeopleInfoPopup:false,
      showPeopleInfoPopup1:false
  },
  mutations: {
    setData (state, data) {
      state.showPeopleInfoPopup = data
    },
      setData1 (state, data) {
          state.showPeopleInfoPopup1 = data
      }
  }
}
