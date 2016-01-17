
angular.module('uixApp')
  .controller('InterestAreaIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'InterestArea') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('InterestAreaFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'InterestArea') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'InterestArea') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('interest_area', fieldConfig());
    
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
    schemaService.set('interest_area', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Interest Area",
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
