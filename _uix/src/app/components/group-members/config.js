
angular.module('uixApp')
  .controller('GroupMemberIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupMember') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('GroupMemberFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'GroupMember') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'GroupMember') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('group_member', fieldConfig());
    
    function fieldConfig () {
      return [
        {
          "fieldGroup": [
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
                lookupService.load('group_member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
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
                lookupService.load('group_member').then(function() {
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
              "key": "date_joined",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Joined"
              }
            },
            {
              "className": "col-xs-6",
              "key": "group_member_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Group Member Status",
                "lookup": "group_member_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('group_member').then(function() {
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
    schemaService.set('group_member', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Group Member",
        "required": [
          "group_id",
          "member_id",
          "group_member_status_id"
        ],
        "properties": {
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
          "date_joined": {
            "key": "date_joined",
            "title": "Date Joined",
            "type": "date",
            "format": "date"
          },
          "group_member_status_id": {
            "key": "group_member_status_id",
            "title": "Group Member Status",
            "type": "number",
            "lookup": "group_member_status",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
