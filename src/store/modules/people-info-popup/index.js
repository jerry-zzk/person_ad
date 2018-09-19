export default {
    state: {
        showPeopleInfoPopup: false,
        showPeopleInfoPopup1: false,
        tab:''
    },
    mutations: {
        setData(state, data) {
            state.showPeopleInfoPopup = data
        },
        setData1(state, data) {
            state.showPeopleInfoPopup1 = data
        },
        setTab(state, data) {
            state.tab = data
        },
    }
}
