
angular.module('uixApp')
  .controller('PupilRegisterIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'PupilRegister') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('PupilRegisterFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'PupilRegister') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'PupilRegister') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('pupil_register', fieldConfig());
    
    function fieldConfig () {
      return [
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "pupil_attendance_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Pupil Attendance",
                "lookup": "pupil_attendance",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil_register').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "pupil_id",
              "type": "ex-select",
              "templateOptions": {
                "required": false,
                "label": "Pupil",
                "lookup": "pupil",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil_register').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
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
    schemaService.set('pupil_register', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Pupil Register",
        "required": [
          "pupil_attendance_id",
          "pupil_group_id"
        ],
        "properties": {
          "pupil_attendance_id": {
            "key": "pupil_attendance_id",
            "title": "Pupil Attendance",
            "type": "number",
            "lookup": "pupil_attendance",
            "items": [],
            "format": "select"
          },
          "pupil_id": {
            "key": "pupil_id",
            "title": "Pupil",
            "type": "number",
            "lookup": "pupil",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
