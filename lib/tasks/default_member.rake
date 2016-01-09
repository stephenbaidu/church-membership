namespace :app do
  desc 'Default member'
  task :default_member => :environment do |t, args|
    Member.create!(
      name: 'N/A',
      title_id: 1,
      surname: 'N/A',
      othernames: 'N/A',
      gender_id: 1,
      marital_status_id: 1,
      region_id: 1,
      blood_group_id: 1,
      member_status_id: 1
    )
  end
end
