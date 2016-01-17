
angular.module('uixApp')
  .controller('MemberIndexCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:index-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Member') return;
      // Do something
    });
  });

angular.module('uixApp')
  .controller('MemberFormCtrl', function ($scope, $rootScope, APP, $http, exMsg) {
    
    $scope.$on('uix:form-ready', function (evt, modelName, config, scope) {
      if (modelName !== 'Member') return;
      // Do something
    });

    $scope.$on('uix:record-loaded', function (evt, modelName, record, scope) {
      if (modelName !== 'Member') return;
      // Do something
    });
  });

angular.module('uixApp')
  .run(function (fieldService) {
    // Set config for angular-formly
    fieldService.set('member', fieldConfig1());
    fieldService.set('member1', fieldConfig1());
    fieldService.set('member2', fieldConfig());
    fieldService.set('member3', fieldConfig());
    
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
              "key": "title_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Title",
                "lookup": "title",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "surname",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Surname"
              }
            },
            {
              "className": "col-xs-6",
              "key": "othernames",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Othernames"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
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
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
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
              "className": "col-xs-6",
              "key": "age",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Age"
              }
            },
            {
              "className": "col-xs-6",
              "key": "marital_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Marital Status",
                "lookup": "marital_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "home_town",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Home Town"
              }
            },
            {
              "className": "col-xs-6",
              "key": "region_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Region",
                "lookup": "region",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "postal_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Postal Address"
              }
            },
            {
              "className": "col-xs-6",
              "key": "residential_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Residential Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "residential_landmak",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Residential Landmak"
              }
            },
            {
              "className": "col-xs-6",
              "key": "phone_numbers",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Phone Numbers"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "occupation",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Occupation"
              }
            },
            {
              "className": "col-xs-6",
              "key": "institution_name",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Institution Name"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "institution_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Institution Address"
              }
            },
            {
              "className": "col-xs-6",
              "key": "email_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Email Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "spoken_language_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Spoken Languages",
                "lookup": "spoken_language",
                "placeholder": "Select spoken languages ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "church_office_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Church Offices",
                "lookup": "church_office",
                "placeholder": "Select church offices ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "interest_area_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Interest Areas",
                "lookup": "interest_area",
                "placeholder": "Select interest areas ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "date_joined",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Joined"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "baptized",
              "type": "ex-checkbox",
              "templateOptions": {
                "required": false,
                "label": "Baptized"
              }
            },
            {
              "className": "col-xs-6",
              "key": "baptism_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Baptism Date"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "baptismal_certificate_no",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Baptismal Certificate No"
              }
            },
            {
              "className": "col-xs-6",
              "key": "date_of_rhf",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Of Rhf"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "rhf_extended_by",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Rhf Extended By"
              }
            },
            {
              "className": "col-xs-6",
              "key": "blood_group_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Blood Group",
                "lookup": "blood_group",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "holy_spirit_baptism",
              "type": "ex-checkbox",
              "templateOptions": {
                "required": false,
                "label": "Holy Spirit Baptism"
              }
            },
            {
              "className": "col-xs-6",
              "key": "spiritual_gift_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Spiritual Gifts",
                "lookup": "spiritual_gift",
                "placeholder": "Select spiritual gifts ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "next_of_kin_name",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Name"
              }
            },
            {
              "className": "col-xs-6",
              "key": "next_of_kin_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "next_of_kin_phone",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Phone"
              }
            },
            {
              "className": "col-xs-6",
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
                lookupService.load('member').then(function() {
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
              "key": "member_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Member Status",
                "lookup": "member_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            }
          ]
        }
      ];
    }
    
    function fieldConfig1 () {
      return [
        {
          "fieldGroup": [
            {
              "className": "col-xs-2",
              "key": "title_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Title",
                "lookup": "title",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-4",
              "key": "surname",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Surname"
              }
            },
            {
              "className": "col-xs-6",
              "key": "othernames",
              "type": "ex-input",
              "templateOptions": {
                "required": true,
                "label": "Othernames"
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
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-4",
              "key": "marital_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Marital Status",
                "lookup": "marital_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
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
              "className": "col-xs-6",
              "key": "home_town",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Home Town"
              }
            },
            {
              "className": "col-xs-6",
              "key": "region_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Region",
                "lookup": "region",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "postal_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Postal Address"
              }
            },
            {
              "className": "col-xs-6",
              "key": "residential_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Residential Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "residential_landmak",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Residential Landmak"
              }
            },
            {
              "className": "col-xs-6",
              "key": "phone_numbers",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Phone Numbers"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "occupation",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Occupation"
              }
            },
            {
              "className": "col-xs-6",
              "key": "institution_name",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Institution Name"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "institution_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Institution Address"
              }
            },
            {
              "className": "col-xs-6",
              "key": "email_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Email Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "spoken_language_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Spoken Languages",
                "lookup": "spoken_language",
                "placeholder": "Select spoken languages ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "church_office_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Church Offices",
                "lookup": "church_office",
                "placeholder": "Select church offices ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "interest_area_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Interest Areas",
                "lookup": "interest_area",
                "placeholder": "Select interest areas ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
                  $scope.to.options = lookupService.get($scope.to.lookup);
                });
              }
            },
            {
              "className": "col-xs-6",
              "key": "date_joined",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Joined"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "baptized",
              "type": "ex-checkbox",
              "templateOptions": {
                "required": false,
                "label": "Baptized"
              }
            },
            {
              "className": "col-xs-6",
              "key": "baptism_date",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Baptism Date"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "baptismal_certificate_no",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Baptismal Certificate No"
              }
            },
            {
              "className": "col-xs-6",
              "key": "date_of_rhf",
              "type": "ex-datepicker",
              "templateOptions": {
                "required": false,
                "label": "Date Of Rhf"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "rhf_extended_by",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Rhf Extended By"
              }
            },
            {
              "className": "col-xs-6",
              "key": "blood_group_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Blood Group",
                "lookup": "blood_group",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "holy_spirit_baptism",
              "type": "ex-checkbox",
              "templateOptions": {
                "required": false,
                "label": "Holy Spirit Baptism"
              }
            },
            {
              "className": "col-xs-6",
              "key": "spiritual_gift_ids",
              "type": "ex-select-multiple",
              "templateOptions": {
                "required": false,
                "label": "Spiritual Gifts",
                "lookup": "spiritual_gift",
                "placeholder": "Select spiritual gifts ...",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
              "key": "next_of_kin_name",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Name"
              }
            },
            {
              "className": "col-xs-6",
              "key": "next_of_kin_address",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Address"
              }
            }
          ]
        },
        {
          "fieldGroup": [
            {
              "className": "col-xs-6",
              "key": "next_of_kin_phone",
              "type": "ex-input",
              "templateOptions": {
                "required": false,
                "label": "Next Of Kin Phone"
              }
            },
            {
              "className": "col-xs-6",
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
                lookupService.load('member').then(function() {
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
              "key": "member_status_id",
              "type": "ex-select",
              "templateOptions": {
                "required": true,
                "label": "Member Status",
                "lookup": "member_status",
                "valueProp": "value",
                "labelProp": "name",
                "options": []
              },
              "controller": /* @ngInject */ function($scope, lookupService) {
                lookupService.load('member').then(function() {
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
    schemaService.set('member', schemaConfig());
    
    function schemaConfig () {
      return {
        "type": "object",
        "title": "Member",
        "required": [
          "surname",
          "othernames",
          "age",
          "title_id",
          "gender_id",
          "marital_status_id",
          "region_id",
          "blood_group_id",
          "member_status_id"
        ],
        "properties": {
          "name": {
            "key": "name",
            "title": "Name",
            "type": "string",
            "format": "text"
          },
          "title_id": {
            "key": "title_id",
            "title": "Title",
            "type": "number",
            "lookup": "title",
            "items": [],
            "format": "select"
          },
          "surname": {
            "key": "surname",
            "title": "Surname",
            "type": "string",
            "format": "text"
          },
          "othernames": {
            "key": "othernames",
            "title": "Othernames",
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
          "date_of_birth": {
            "key": "date_of_birth",
            "title": "Date Of Birth",
            "type": "date",
            "format": "date"
          },
          "age": {
            "key": "age",
            "title": "Age",
            "type": "number",
            "format": "text"
          },
          "marital_status_id": {
            "key": "marital_status_id",
            "title": "Marital Status",
            "type": "number",
            "lookup": "marital_status",
            "items": [],
            "format": "select"
          },
          "home_town": {
            "key": "home_town",
            "title": "Home Town",
            "type": "string",
            "format": "text"
          },
          "region_id": {
            "key": "region_id",
            "title": "Region",
            "type": "number",
            "lookup": "region",
            "items": [],
            "format": "select"
          },
          "postal_address": {
            "key": "postal_address",
            "title": "Postal Address",
            "type": "string",
            "format": "text"
          },
          "residential_address": {
            "key": "residential_address",
            "title": "Residential Address",
            "type": "string",
            "format": "text"
          },
          "residential_landmak": {
            "key": "residential_landmak",
            "title": "Residential Landmak",
            "type": "string",
            "format": "text"
          },
          "phone_numbers": {
            "key": "phone_numbers",
            "title": "Phone Numbers",
            "type": "string",
            "format": "text"
          },
          "occupation": {
            "key": "occupation",
            "title": "Occupation",
            "type": "string",
            "format": "text"
          },
          "institution_name": {
            "key": "institution_name",
            "title": "Institution Name",
            "type": "string",
            "format": "text"
          },
          "institution_address": {
            "key": "institution_address",
            "title": "Institution Address",
            "type": "string",
            "format": "text"
          },
          "email_address": {
            "key": "email_address",
            "title": "Email Address",
            "type": "string",
            "format": "text"
          },
          "spoken_language_ids": {
            "key": "spoken_language_ids",
            "title": "Spoken Languages",
            "type": "array",
            "default": [],
            "lookup": "spoken_language",
            "items": [],
            "format": "select"
          },
          "church_office_ids": {
            "key": "church_office_ids",
            "title": "Church Offices",
            "type": "array",
            "default": [],
            "lookup": "church_office",
            "items": [],
            "format": "select"
          },
          "interest_area_ids": {
            "key": "interest_area_ids",
            "title": "Interest Areas",
            "type": "array",
            "default": [],
            "lookup": "interest_area",
            "items": [],
            "format": "select"
          },
          "date_joined": {
            "key": "date_joined",
            "title": "Date Joined",
            "type": "date",
            "format": "date"
          },
          "baptized": {
            "key": "baptized",
            "title": "Baptized",
            "type": "boolean",
            "format": "text"
          },
          "baptism_date": {
            "key": "baptism_date",
            "title": "Baptism Date",
            "type": "date",
            "format": "date"
          },
          "baptismal_certificate_no": {
            "key": "baptismal_certificate_no",
            "title": "Baptismal Certificate No",
            "type": "string",
            "format": "text"
          },
          "date_of_rhf": {
            "key": "date_of_rhf",
            "title": "Date Of Rhf",
            "type": "date",
            "format": "date"
          },
          "rhf_extended_by": {
            "key": "rhf_extended_by",
            "title": "Rhf Extended By",
            "type": "string",
            "format": "text"
          },
          "blood_group_id": {
            "key": "blood_group_id",
            "title": "Blood Group",
            "type": "number",
            "lookup": "blood_group",
            "items": [],
            "format": "select"
          },
          "holy_spirit_baptism": {
            "key": "holy_spirit_baptism",
            "title": "Holy Spirit Baptism",
            "type": "boolean",
            "format": "text"
          },
          "spiritual_gift_ids": {
            "key": "spiritual_gift_ids",
            "title": "Spiritual Gifts",
            "type": "array",
            "default": [],
            "lookup": "spiritual_gift",
            "items": [],
            "format": "select"
          },
          "next_of_kin_name": {
            "key": "next_of_kin_name",
            "title": "Next Of Kin Name",
            "type": "string",
            "format": "text"
          },
          "next_of_kin_address": {
            "key": "next_of_kin_address",
            "title": "Next Of Kin Address",
            "type": "string",
            "format": "text"
          },
          "next_of_kin_phone": {
            "key": "next_of_kin_phone",
            "title": "Next Of Kin Phone",
            "type": "string",
            "format": "text"
          },
          "group_ids": {
            "key": "group_ids",
            "title": "Groups",
            "type": "array",
            "default": [],
            "lookup": "group",
            "items": [],
            "format": "select"
          },
          "member_status_id": {
            "key": "member_status_id",
            "title": "Member Status",
            "type": "number",
            "lookup": "member_status",
            "items": [],
            "format": "select"
          }
        }
      };
    }
  });
