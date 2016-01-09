// Module config setup
angular.module('angularApp')
  .run(function run(APP) {
    APP.setModule('main', {
      title: 'Membership',
      icon: 'fa fa-users', 
      links: links(),
      hasAccess: hasAccess
    });
    
    function links () {
      return [
        { text: 'Members', url: 'members', icon: 'fa fa-user-plus color-cyan-500' },
        { text: 'Groups', url: 'groups', icon: 'fa fa-sitemap color-blue-800' },
        { text: 'Events', url: 'event-schedules', icon: 'fa fa-calendar color-teal-400' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
