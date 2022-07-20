"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* global enigma Piechart include schema echarts import */

/* global echarts */
var Piechart = /*#__PURE__*/function () {
  function Piechart(elementId, options) {
    _classCallCheck(this, Piechart);

    this._options = {};
    var DEFFAULTS = {};
    this.elementId = elementId;
    this.options = _extends({}, DEFFAULTS, options);
    this.options.model.on('changed', this.render.bind(this));
    var el = document.getElementById(this.elementId);
    this.myChart = echarts.init(el);
    this.render();
  }

  _createClass(Piechart, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.options.model.getLayout().then(function (layout) {
        _this._options = {
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
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [{
              value: 1048,
              name: 'Search Engine'
            }, {
              value: 735,
              name: 'Direct'
            }, {
              value: 580,
              name: 'Email'
            }, {
              value: 484,
              name: 'Union Ads'
            }, {
              value: 300,
              name: 'Video Ads'
            }],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        };
        _this._options && _this.myChart.setOption(_this._options);
      });
    }
  }]);

  return Piechart;
}();

var config = {
  schema: window.schema,
  url: 'wss://ec2-3-86-99-193.compute-1.amazonaws.com/app/2e6729b6-a44f-4869-a0da-78dddac307cd'
};
var session = enigma.create(config);
console.log(session);
session.open().then(function (global) {
  global.openDoc('2e6729b6-a44f-4869-a0da-78dddac307cd').then(function (app) {
    console.log(app);
    app.getObject('WhgXJs').then(function (model) {
      console.log('esta es mi tarta', model);
      var piechart = new Piechart('piechart1', {
        model: model
      });
    });
  });
});
