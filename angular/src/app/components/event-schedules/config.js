
angular.module('angularApp')
  .controller('EventScheduleIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'EventSchedule') return;
      // Do something
    });
  });

angular.module('angularApp')
  .controller('EventScheduleFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'EventSchedule') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'EventSchedule') return;
      // Do something
    });
  });

angular.module('angularApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('event_schedule', fieldConfig());
    
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
              "key": "description",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Description"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "special_event",
              "type": "ex-checkbox",
              "templateOptions": {
                "required": false,
                "label": "Special Event"
              }
            },
            {
              "className": "col-xs-6",
              "key": "event_type_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Event Type",
                "lookup": "event_type",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('event_schedule').then(function() {
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
              "key": "start_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": true,
                "label": "Start Date"
              }
            },
            {
              "className": "col-xs-6",
              "key": "end_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": true,
                "label": "End Date"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-12",
              "key": "group_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Groups",
                "lookup": "group",
                "placeholder": "Select groups ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('event_schedule').then(function() {
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
    schemaService.set('event_schedule', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Event Schedule",
        "required": [
          "name",
          "start_date",
          "end_date",
          "event_type_id"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "description": {
            "key": "description",
            "title": "Description",
            "type": "string",
            "format": "text"
          },
          "special_event": {
            "key": "special_event",
            "title": "Special Event",
            "type": "boolean",
            "format": "text"
          },
          "event_type_id": {
            "key": "event_type_id",
            "title": "Event Type",
            "type": "number",
            "lookup": "event_type",
            "items": [],
            "format": "select"
          },
          "start_date": {
            "key": "start_date",
            "title": "Start Date",
            "type": "datetime",
            "format": "date"
          },
          "end_date": {
            "key": "end_date",
            "title": "End Date",
            "type": "datetime",
            "format": "date"
          },
          "group_ids": {
            "key": "group_ids",
            "title": "Groups",
            "type": "array",
            "default": [],
            "lookup": "group",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
