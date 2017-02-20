'use strict';

/**
 * @ngdoc function
 * @name visjsTimeline.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the visjsTimeline
 */
angular.module('visjsTimeline')
  .controller('MainCtrl', function ($scope, VisDataSet) {
    $scope.options = {
      // height:'',
      //width: '',
      align: 'center', // left | right (String)
      autoResize: true, // false (Boolean)
      editable: true,
      selectable: true,
      // start: null,
      // end: null,      
      margin: {
        axis: 20,
        item: 10
      },
      // min: null,
      // max: null,
      // maxHeight: null,
      orientation: 'bottom',// top or both
      // type: 'box', // dot | point
      // zoomMin: 1000,
      // zoomMax: 1000 * 60 * 60 * 24 * 30 * 12 * 10,
      // groupOrder: 'content',
      stack: false
    };

    var groups = VisDataSet([
      { id: 0, content: 'First', value: 1 },
      { id: 1, content: 'Third', value: 3 },
      { id: 2, content: 'Second', value: 2 }
    ]);

    var items = VisDataSet([
      { id: 0, group: 0, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 30) },
      { id: 1, group: 0, content: 'item 1', start: new Date(2014, 4, 1), end: new Date(2014, 4, 20) },
      { id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24) },
      { id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 25), end: new Date(2014, 3, 30) },
      { id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 30), end: new Date(2014, 4, 15) },
      { id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27) }
    ]);

    $scope.data = { groups: groups, items: items };

  });