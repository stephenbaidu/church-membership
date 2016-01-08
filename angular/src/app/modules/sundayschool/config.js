// Module config setup
angular.module('angularApp')
  .run(function run(APP) {
    APP.setModule('sundayschool', {
      title: 'Sunday School',
      icon: 'fa fa-undo', 
      links: links(),
      hasAccess: hasAccess
    });
    
    function links () {
      return [
        { text: 'Pupils', url: 'pupils', icon: 'fa fa-graduation-cap color-deep-orange-a700' },
        { text: 'Pupil Groups', url: 'pupil-groups', icon: 'fa fa-train color-light-green-900' },
        { text: 'Pupil Attendances', url: 'pupil-attendances', icon: 'fa fa-envelope color-indigo-600' },
        { text: 'Pupil Schools', url: 'pupil-schools', icon: 'fa fa-cc-discover color-purple-600' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
