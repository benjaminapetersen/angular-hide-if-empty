'use strict';
// - watches child node list
// - if there are no nodes, this node will not be visible.
// - if:
//     <div hide-if-empty="include comments"></div>
//   then comment nodes will be treated as DOM nodes (ie, comments will keep parent visible)
angular.module('hide-if-empty')
  .directive('hideIfEmpty', function() {
    return {
      restrict: 'AE',
      link: function($scope, $elem, $attrs) {
        $scope.$watch(function() {
          return ($attrs.hideIfEmpty === 'include comments') ?
                    $elem[0].childNodes.length : // will count <!-- comment nodes -->
                    $elem.children().length;
        }, function(newVal, oldVal) {
          if(!newVal) {
            $elem.hide();
          } else {
            $elem.show();
          }
        });
      }
    };
  });
