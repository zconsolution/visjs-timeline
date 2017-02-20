angular.module('ngVis', [])

  .factory('VisDataSet', function () {
    'use strict';
    return function (data, options) {
      // Create the new dataSets
      return new vis.DataSet(data, options);
    };
  })
  /**
   * TimeLine directive
   */
  .directive('visTimeline', function () {
    'use strict';
    return {
      restrict: 'EA',
      transclude: false,
      scope: {
        data: '=',
        options: '=',
        events: '='
      },
      link: function (scope, element, attr) {

        // Declare the timeline
        var timeline = null;

        scope.$watch('data', function () {
          // Sanity check
          if (scope.data == null) {
            return;
          }

          // If we've actually changed the data set, then recreate the graph
          // We can always update the data by adding more data to the existing data set
          if (timeline != null) {
            timeline.destroy();
          }

          // Create the timeline object
          timeline = new vis.Timeline(element[0], scope.data.items, scope.data.groups, scope.options);
        });

        scope.$watchCollection('options', function (options) {
          if (timeline == null) {
            return;
          }
          timeline.setOptions(options);
        });
      }
    };
  });
