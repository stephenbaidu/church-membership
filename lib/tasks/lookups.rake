namespace :app do
  desc 'Creates lookups'
  task :lookups => :environment do |t, args|

    # # **********************************
    # # Sample code for populating lookups
    # # **********************************
    
    {
      'Title'  => ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof'],
      'Gender' => ['Male', 'Female'],
      'MaritalStatus' => ['N/A', 'Single', 'Married', 'Divorced', 'Widowed'],
      'Region' => ['Ashanti', 'Brong Ahafo', 'Central', 'Eastern', 'Greater Accra', 'Northern', 'Upper East', 'Upper West', 'Volta', 'Western'],
      'SpokenLanguage' => ['English', 'Twi', 'Ewe', 'Ga', 'Adangbe'],
      'ChurchOffice' => ['Apostle', 'Pastor', 'Elder', 'Deacon', 'Deaconness'],
      'InterestArea' => ['Praise and Worship/Music', 'Evangelism/Follow-up', 'Prayer', 'Ushering', 'Bible Study', 'Organizing'],
      'BloodGroup' => ['N/A', 'A', 'B', 'AB', 'O'],
      'SpiritualGift' => [],
      'MemberStatus' => ['Active', 'Inactive'],
      'GroupPosition' => ['President', 'Vice President', 'Secretary', 'Treasurer', 'Organizer'],
      'GroupMemberStatus' => ['Active', 'Inactive'],
      'EventType' => ['Sunday Service', 'Evening Service', 'All-Night Service'],
      'PupilGroup' => ['Teens', 'Class 2', 'Class 1'],
      'PupilSchool' => ['N/A'],
      'PupilStatus' => ['Active', 'Travelled', 'Inactive']
    }.each do |k, v|
      begin
        klass = k.to_s.constantize
        v.each { |n| klass.create(name: n) } if klass.count == 0
      rescue
      end
    end
  end
end
