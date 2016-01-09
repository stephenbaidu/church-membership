
angular.module('angularApp')
  .controller('PupilIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Pupil') return;
      // Do something
    });
  });

angular.module('angularApp')
  .controller('PupilFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Pupil') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'Pupil') return;
      // Do something
    });
  });

angular.module('angularApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('pupil', fieldConfig());
    
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
              "className": "col-xs-2",
              "key": "age",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Age"
              }
            },
            {
              "className": "col-xs-4",
              "key": "date_of_birth",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Of Birth"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-2",
              "key": "gender_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Gender",
                "lookup": "gender",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-4",
              "key": "pupil_group_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Class",
                "lookup": "pupil_group",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "pupil_school_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "School",
                "lookup": "pupil_school",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil').then(function() {
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
              "key": "extra_details",
              "type": "textarea",
              "templateOptions": {
                "required": false,
                "label": "Extra Details"
              }
            },
            {
              "className": "col-xs-6",
              "key": "school_details",
              "type": "textarea",
              "templateOptions": {
                "required": false,
                "label": "School Details"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Address"
              }
            },
            {
              "className": "col-xs-2",
              "key": "phone_no",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Phone No"
              }
            },
            {
              "className": "col-xs-4",
              "key": "email",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Email"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-8",
              "key": "member_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Parents/Guardians",
                "lookup": "member",
                "placeholder": "Select parent or guardian names ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-4",
              "key": "pupil_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Pupil Status",
                "lookup": "pupil_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('pupil').then(function() {
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
    schemaService.set('pupil', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Pupil",
        "required": [
          "name",
          "age",
          "gender_id",
          "pupil_group_id",
          "pupil_school_id",
          "pupil_status_id"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "gender_id": {
            "key": "gender_id",
            "title": "Gender",
            "type": "number",
            "lookup": "gender",
            "items": [],
            "format": "select"
          },
          "age": {
            "key": "age",
            "title": "Age",
            "type": "number",
            "format": "text"
          },
          "date_of_birth": {
            "key": "date_of_birth",
            "title": "Date Of Birth",
            "type": "date",
            "format": "date"
          },
          "pupil_group_id": {
            "key": "pupil_group_id",
            "title": "Pupil Group",
            "type": "number",
            "lookup": "pupil_group",
            "items": [],
            "format": "select"
          },
          "pupil_school_id": {
            "key": "pupil_school_id",
            "title": "Pupil School",
            "type": "number",
            "lookup": "pupil_school",
            "items": [],
            "format": "select"
          },
          "school_details": {
            "key": "school_details",
            "title": "School Details",
            "type": "string",
            "format": "text"
          },
          "extra_details": {
            "key": "extra_details",
            "title": "Extra Details",
            "type": "string",
            "format": "text"
          },
          "address": {
            "key": "address",
            "title": "Address",
            "type": "string",
            "format": "text"
          },
          "phone_no": {
            "key": "phone_no",
            "title": "Phone No",
            "type": "string",
            "format": "text"
          },
          "email": {
            "key": "email",
            "title": "Email",
            "type": "string",
            "pattern": "^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$",
            "validationMessage": "Should be a correct Email Address",
            "format": "text"
          },
          "pupil_status_id": {
            "key": "pupil_status_id",
            "title": "Pupil Status",
            "type": "number",
            "lookup": "pupil_status",
            "items": [],
            "format": "select"
          },
          "member_ids": {
            "key": "member_ids",
            "title": "Members",
            "type": "array",
            "default": [],
            "lookup": "member",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
