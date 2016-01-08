namespace :app do
  desc 'Creates default roles'
  task :setup_roles => :environment do |t, args|

    # Default user roles
    [
      {
        name: 'Membership Administrator',
        permissions: [
          'spoken_language:icsu', 'church_office:icsu', 'interest_area:icsu',
          'spiritual_gift:i', 'member:icsud'
        ]
      }, {
        name: 'Groups Administrator',
        permissions: [
          'group:icsud', 'group_position:icsud', 'group_leader:icsud', 'group_member:icsud'
        ]
      },{
        name: 'Event Manager',
        permissions: [
          'event_type:icsu', 'event_schedule:icsud'
        ]
      }, {
        name: 'Data Entry Clerk',
        permissions: [
          'member:ics'
        ]
      }, {
        name: 'Sunday School',
        permissions: [
          'pupil_group:icsu', 'pupil_school:icsu', 'pupil:icsu',
          'pupil_attendance:icsu', 'pupil_register:icsu', 'member:is',
        ]
      }
    ].each do |role|
      next if Role.where(name: role[:name]).exists?
      
      permissions = role[:permissions].map do |p|
        p.split(':').second.split('').map do |p2|
          p.split(':').first.classify + ':' + {
            i: 'index', c: 'create', s: 'show', u: 'update', d: 'delete'
          }[p2.to_sym]
        end
      end.flatten

      Role.create name: role[:name], permissions: permissions
    end
  end
end