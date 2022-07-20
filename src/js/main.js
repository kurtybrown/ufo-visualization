/* global enigma Piechart include schema echarts import */ 
include('/piechart.js')

const config = {
  schema: window.schema, 
  url: 'wss://ec2-3-86-99-193.compute-1.amazonaws.com/app/2e6729b6-a44f-4869-a0da-78dddac307cd'
}

const session = enigma.create(config)
console.log(session)
session.open().then(global => {
  global.openDoc('2e6729b6-a44f-4869-a0da-78dddac307cd').then(app => {
    console.log(app)
    app.getObject('WhgXJs').then(model => {
      console.log('esta es mi tarta', model)
      const piechart = new Piechart('piechart1', { model })
    })
  })
})
