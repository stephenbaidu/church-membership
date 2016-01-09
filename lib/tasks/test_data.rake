namespace :app do
  desc 'Load test data'
  task :test_data => :environment do |t, args|

    if Rails.env != 'development'
      break
    end

    # Members
    title_ids = Title.pluck(:id)
    gender_ids = Gender.pluck(:id)
    marital_status_ids = MaritalStatus.pluck(:id)
    region_ids = Region.pluck(:id)
    blood_group_ids = BloodGroup.pluck(:id)
    member_status_ids = MemberStatus.pluck(:id)
    spoken_language_ids = SpokenLanguage.pluck(:id)
    church_office_ids = ChurchOffice.pluck(:id)
    interest_area_ids = InterestArea.pluck(:id)
    spiritual_gift_ids = SpiritualGift.pluck(:id)

    241.times {
      title_id = title_ids.sample
      surname = Faker::Name.last_name
      othernames = Faker::Name.first_name
      
      # Handle date_of_birth and age
      date_of_birth = (rand < 0.3) ? nil : Faker::Date.between(17.years.ago, 72.years.ago)
      age = nil
      if date_of_birth
        d = date_of_birth
        n = Date.today
        age = n.year - d.year - ((n.month > d.month || (n.month == d.month && n.day >= d.day)) ? 0 : 1)
      else
        age = Faker::Number.between(50, 80) if (rand > 0.5)
      end

      Member.create!(
        name: "#{Title.find(title_id).name} #{othernames} #{surname}",
        title_id: title_id,
        surname: surname,
        othernames: othernames,
        gender_id: gender_ids.sample,
        date_of_birth: date_of_birth,
        age: age,
        marital_status_id: marital_status_ids.sample,
        home_town: Faker::Address.city,
        region_id: region_ids.sample,
        postal_address: nil,
        residential_address: nil,
        residential_landmak: nil,
        phone_numbers: nil,
        occupation: nil,
        institution_name: nil,
        institution_address: nil,
        email_address: nil,
        spoken_language_ids: nil,
        church_office_ids: nil,
        interest_area_ids: nil,
        date_joined: nil,
        baptized: nil,
        baptism_date: nil,
        baptismal_certificate_no: nil,
        date_of_rhf: nil,
        rhf_extended_by: nil,
        blood_group_id: blood_group_ids.sample,
        holy_spirit_baptism: nil,
        spiritual_gift_ids: nil,
        next_of_kin_name: nil,
        next_of_kin_address: nil,
        next_of_kin_phone: nil,
        group_ids: nil,
        member_status_id: member_status_ids.sample,
      )
    }

    # Events
    (Date.today.beginning_of_year..Date.today.end_of_year).to_a.each { |day|
      # Sunday service
      if day.sunday?
        data = {
          name: 'Sunday Service',
          description: '',
          event_type_id: 1,
          start_date: day.beginning_of_day + 7.hours,
          end_date: day.beginning_of_day + 11.hours,
          group_ids: Group.pluck(:id)
        }
        EventSchedule.create(data)
      end

      # Evening Services
      if day.tuesday? || day.wednesday?
        data = {
          name: day.tuesday? ? "Women's Meeting" : 'Wednesday Evening Service',
          description: '',
          event_type_id: 2,
          start_date: day.beginning_of_day + 17.hours,
          end_date: day.beginning_of_day + 19.hours
          # group_ids: Groups.pluck(:id)
        }
        EventSchedule.create(data)
      end

      # All-Night Service
      if day.friday? && rand > 0.75
        data = {
          name: 'All-Night Service',
          description: '',
          event_type_id: 3,
          start_date: day.beginning_of_day + 19.hours,
          end_date: day.beginning_of_day + 23.hours
          # group_ids: Groups.pluck(:id)
        }
        EventSchedule.create(data)
      end
    }
    

    # Sunday School
    gender_ids = Gender.pluck(:id)
    pupil_group_ids = PupilGroup.pluck(:id)
    pupil_school_ids = PupilSchool.pluck(:id)
    pupil_status_ids = PupilStatus.pluck(:id)

    84.times {
      
      # Handle date_of_birth and age
      date_of_birth = (rand < 0.3) ? nil : Faker::Date.between(1.years.ago, 17.years.ago)
      age = nil
      if date_of_birth
        d = date_of_birth
        n = Date.today
        age = n.year - d.year - ((n.month > d.month || (n.month == d.month && n.day >= d.day)) ? 0 : 1)
      else
        age = Faker::Number.between(1, 7) if (rand > 0.5)
      end

      Pupil.create!(
        name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
        gender_id: gender_ids.sample,
        age: age,
        date_of_birth: date_of_birth,
        pupil_group_id: pupil_group_ids.sample,
        pupil_school_id: pupil_school_ids.sample,
        pupil_status_id: pupil_status_ids.sample
      )
    }
  end
end
