// Module config setup
angular.module('uixApp')
  .run(function run(APP) {
    APP.setModule('sundayschool', {
      title: 'Sunday School',
      icon: 'fa fa-child', 
      links: links(),
      hasAccess: hasAccess
    });
    
    function links () {
      return [
        { text: 'Pupils', url: 'pupils', icon: 'fa fa-graduation-cap color-teal-500' },
        { text: 'Classes', url: 'pupil-groups', icon: 'fa fa-group color-light-green-900' },
        { text: 'Attendance', url: 'pupil-attendances', icon: 'fa fa-leanpub color-cyan-500' },
        { text: 'Schools', url: 'pupil-schools', icon: 'fa fa-book color-purple-600' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
