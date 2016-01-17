// Module config setup
angular.module('uixApp')
  .run(function run(APP) {
    APP.setModule('admin', {
      title: 'Admin Panel',
      icon: 'fa fa-cogs', 
      links: links(),
      hasAccess: hasAccess
    });
    
    function links () {
      return [
        { text: 'Users', url: 'users', icon: 'fa fa-user-secret color-pink-a400' },
        { text: 'Church Offices', url: 'church-offices', icon: 'fa fa-jsfiddle color-cyan-500' },
        { text: 'Spiritual Gifts', url: 'spiritual-gifts', icon: 'fa fa-gift color-orange-a700' },
        { text: 'Languages', url: 'spoken-languages', icon: 'fa fa-language color-light-blue-800' },
        { text: 'Interest Areas', url: 'interest-areas', icon: 'fa fa-plane color-deep-purple-800' },
        { text: 'Event Types', url: 'event-types', icon: 'fa fa-calendar color-indigo-600' },
        { text: 'Roles', url: 'roles', icon: 'fa fa-unlock-alt color-deep-purple-500' }
      ];
    }

    function hasAccess (user) {
      return true;
    }
  });
