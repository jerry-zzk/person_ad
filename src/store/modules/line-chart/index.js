export default {
  state: {
    chartData: {
      name: ["曲线A","曲线B"],
      x: ['2018-5-4', '2018-5-5', '2018-5-6', '2018-5-7', '2018-5-8', '2018-5-9'],
      y: [
        [5, 20, 36, 10, 10, 20],
        [15, 22, 10, 30, 20, 40]
      ]
    }
  },
  mutations: {
    setName (state, msg) {
      state.chartData.name = msg
    },
    setX (state, msg) {
      state.chartData.x = msg
    },
    setY (state, msg) {
      state.chartData.Y = msg
    }
  }
}
