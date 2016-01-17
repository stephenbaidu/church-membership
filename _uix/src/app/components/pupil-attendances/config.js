
angular.module('uixApp')
  .controller('PupilAttendanceIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'PupilAttendance') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('PupilAttendanceFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'PupilAttendance') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'PupilAttendance') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('pupil_attendance', fieldConfig());
    
    function fieldConfig () {
      return [
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "event_schedule_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Event Schedule",
                "lookup": "event_schedule",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil_attendance').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "pupil_group_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Pupil Group",
                "lookup": "pupil_group",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil_attendance').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "count",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Count"
              }
            }
          ]
        }
      ];
    }
  });

angular.module('uixApp')
  .run(function (schemaService) {
    // Set config for json-schema
    schemaService.set('pupil_attendance', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Pupil Attendance",
        "required": [
          "count",
          "event_schedule_id",
          "pupil_group_id"
        ],
        "properties": {
          "event_schedule_id": {
            "key": "event_schedule_id",
            "title": "Event Schedule",
            "type": "number",
            "lookup": "event_schedule",
            "items": [],
            "format": "select"
          },
          "pupil_group_id": {
            "key": "pupil_group_id",
            "title": "Pupil Group",
            "type": "number",
            "lookup": "pupil_group",
            "items": [],
            "format": "select"
          },
          "count": {
            "key": "count",
            "title": "Count",
            "type": "number",
            "format": "text"
          }
        }
      };
    }
  });
