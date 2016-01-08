
angular.module('angularApp')
  .controller('GroupLeaderIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupLeader') return;
      // Do something
    });
  });

angular.module('angularApp')
  .controller('GroupLeaderFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupLeader') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'GroupLeader') return;
      // Do something
    });
  });

angular.module('angularApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('group_leader', fieldConfig());
    
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
              "key": "group_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Group",
                "lookup": "group",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group_leader').then(function() {
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
              "key": "member_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Member",
                "lookup": "member",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group_leader').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "group_position_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Group Position",
                "lookup": "group_position",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group_leader').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            }
          ]
        }
      ];
    }
  });

angular.module('angularApp')
  .run(function (schemaService) {
    // Set config for json-schema
    schemaService.set('group_leader', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Group Leader",
        "required": [
          "name",
          "group_id",
          "member_id",
          "group_position_id"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "group_id": {
            "key": "group_id",
            "title": "Group",
            "type": "number",
            "lookup": "group",
            "items": [],
            "format": "select"
          },
          "member_id": {
            "key": "member_id",
            "title": "Member",
            "type": "number",
            "lookup": "member",
            "items": [],
            "format": "select"
          },
          "group_position_id": {
            "key": "group_position_id",
            "title": "Group Position",
            "type": "number",
            "lookup": "group_position",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
