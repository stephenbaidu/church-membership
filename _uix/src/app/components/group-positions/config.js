
angular.module('uixApp')
  .controller('GroupPositionIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupPosition') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('GroupPositionFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupPosition') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'GroupPosition') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('group_position', fieldConfig());
    
    function fieldConfig () {
      return [
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "name",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Name"
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
    schemaService.set('group_position', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Group Position",
        "required": [
          "name"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          }
        }
      };
    }
  });
