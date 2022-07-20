const DEFINITIONS = {
  pieDef: {
    qInfo: {
      qType: 'pie'
    },
    qHyperCubeDef: {
      qDimensions: [{
        qDef: { 
          qFieldDefs: ['country'],
          qSortCriterias: [ { qSortByState: -1, qSortByAscii: 1 } ]
        }
      }],
      qMeasures: [{
        qDef: {
          qDef: 'Count([date posted.autoCalendar.Date])',
          qLabel: 'UFO sightings'
        },
        qSortBy: {
          qSortByNumeric: -1
        }
      }],
      qInitialDataFetch: [{
        qTop: 0,
        qLeft: 0,
        qWidth: 2,
        qHeight: 100
      }]
    }
  }
}
