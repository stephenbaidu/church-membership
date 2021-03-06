
angular.module('uixApp')
  .controller('GroupIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Group') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('GroupFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Group') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'Group') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('group', fieldConfig());
    
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
            },
            {
              "className": "col-xs-6",
              "key": "total_member_count",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Total Member Count"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "active_member_count",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Active Member Count"
              }
            },
            {
              "className": "col-xs-6",
              "key": "parent_id",
              "type": "ex-select",
              "templateOptions": {
                "required": false,
                "label": "Parent",
                "lookup": "parent",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group').then(function() {
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
              "key": "user_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Users",
                "lookup": "user",
                "placeholder": "Select users ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group').then(function() {
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
    schemaService.set('group', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Group",
        "required": [
          "name",
          "total_member_acount",
          "active_member_acount"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "total_member_count": {
            "key": "total_member_count",
            "title": "Total Member Count",
            "type": "number",
            "format": "text"
          },
          "active_member_count": {
            "key": "active_member_count",
            "title": "Active Member Count",
            "type": "number",
            "format": "text"
          },
          "parent_id": {
            "key": "parent_id",
            "title": "Parent Parent",
            "type": "number",
            "lookup": "parent",
            "items": [],
            "format": "select"
          },
          "user_ids": {
            "key": "user_ids",
            "title": "Users",
            "type": "array",
            "default": [],
            "lookup": "user",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
