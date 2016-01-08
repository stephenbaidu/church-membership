// Module config setup
angular.module('angularApp')
  .run(function run(APP) {
    APP.setModule('main', {
      title: 'Membership',
      icon: 'fa fa-minus-circle', 
      links: links(),
      hasAccess: hasAccess
    });
    
    function links () {
      return [
        { text: 'Members', url: 'members', icon: 'fa fa-file-o color-deep-purple-a700' },
        { text: 'Groups', url: 'groups', icon: 'fa fa-ioxhost color-blue-800' },
        { text: 'Event Schedules', url: 'event-schedules', icon: 'fa fa-cogs color-purple-a400' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
