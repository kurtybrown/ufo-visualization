/* global echarts */ 

class Piechart {
  constructor (elementId, options) {
    this._options = {}
    const DEFFAULTS = {}
    this.elementId = elementId
    this.options = Object.assign({}, DEFFAULTS, options)
    this.options.model.on('changed', this.render.bind(this))
    const el = document.getElementById(this.elementId)
    this.myChart = echarts.init(el)
    this.render()
  }
  render () {
    this.options.model.getLayout().then(layout => {
      this._options = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this._options && this.myChart.setOption(this._options)
    })
  }
}
