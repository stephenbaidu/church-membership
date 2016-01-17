
angular.module('uixApp')
  .controller('CommitteeIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Committee') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('CommitteeFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Committee') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'Committee') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('committee', fieldConfig());
    
    function fieldConfig () {
      return [
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "name",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Name"
              }
            },
            {
              "className": "col-xs-6",
              "key": "committee_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": false,
                "label": "Committee Status",
                "lookup": "committee_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('committee').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-12",
              "key": "purpose",
              "type": "textarea",
              "templateOptions": {
                "required": false,
                "label": "Purpose"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "commencement_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Commencement Date"
              }
            },
            {
              "className": "col-xs-6",
              "key": "conclusion_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Conclusion Date"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-12",
              "key": "member_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Members",
                "lookup": "member",
                "placeholder": "Select members ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('committee').then(function() {
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
    schemaService.set('committee', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Committee",
        "required": [],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "purpose": {
            "key": "purpose",
            "title": "Purpose",
            "type": "string",
            "format": "text"
          },
          "commencement_date": {
            "key": "commencement_date",
            "title": "Commencement Date",
            "type": "date",
            "format": "date"
          },
          "conclusion_date": {
            "key": "conclusion_date",
            "title": "Conclusion Date",
            "type": "date",
            "format": "date"
          },
          "member_ids": {
            "key": "member_ids",
            "title": "Members",
            "type": "array",
            "default": [],
            "lookup": "member",
            "items": [],
            "format": "select"
          },
          "committee_status_id": {
            "key": "committee_status_id",
            "title": "Committee Status",
            "type": "number",
            "lookup": "committee_status",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
