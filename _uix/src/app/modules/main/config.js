// Module config setup
angular.module('uixApp')
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
        { text: 'Events', url: 'event-schedules', icon: 'fa fa-calendar color-teal-400' },
        { text: 'Committees', url: 'committees', icon: 'fa fa-gift color-orange-a700' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
