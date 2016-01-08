# Models
rails g model title name # ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof']
rails g model gender name # ['Male', 'Female']
rails g model marital_status name # ['N/A', 'Single', 'Married', 'Divorced', 'Widowed']
rails g model region name # ['Ashanti', 'Brong Ahafo', 'Central', 'Eastern', 'Greater Accra', 'Northern', 'Upper East', 'Upper West', 'Volta', 'Western']
rails g model spoken_language name # ['English', 'Twi', 'Ewe', 'Ga', 'Adangbe']
rails g model church_office name # ['Apostle', 'Pastor', 'Elder', 'Deacon', 'Deaconness']
rails g model interest_area name # ['Praise and Worship/Music', 'Evangelism/Follow-up', 'Prayer', 'Ushering', 'Bible Study', 'Organizing']
rails g model blood_group name # ['N/A', 'A', 'B', 'AB', 'O']
rails g model spiritual_gift name # 
rails g model member_status name # ['Active', 'Inactive']
rails g model member name title:references surname othernames gender:references date_of_birth:date age:integer marital_status:references home_town region:references postal_address residential_address residential_landmak phone_numbers occupation institution_name institution_address email_address spoken_language_ids church_office_ids interest_area_ids date_joined:date baptized:boolean baptism_date:date baptismal_certificate_no date_of_rhf:date rhf_extended_by blood_group:references holy_spirit_baptism:boolean spiritual_gift_ids next_of_kin_name next_of_kin_address next_of_kin_phone group_ids member_status:references deleted_at:datetime
# serialize :spoken_language_ids, Array
# serialize :church_office_ids, Array
# serialize :interest_area_ids, Array
# serialize :spritual_gift_ids, Array
# serialize :group_ids, Array
rails g model group name total_member_acount:integer active_member_acount:integer parent_id:integer lft:integer rgt:integer depth:integer user_ids deleted_at:datetime # ['Choir']
# serialize :user_ids, Array
rails g model group_position name # ['President', 'Vice President', 'Secretary', 'Treasurer', 'Organizer']
rails g model group_leaders name group:references member:references group_position:references deleted_at:datetime
rails g model group_member_status name # ['Active', 'Inactive']
rails g model group_members group:references member:references date_joined:date group_member_status:references deleted_at:datetime
rails g model event_type name # ['Sunday Service', 'Evening Service', 'All-Night Service']
rails g model event_schedule name description special_event:boolean event_type:references start_date:datetime end_date:datetime all_day:boolean group_ids deleted_at:datetime
# serialize :group_ids, Array
rails g model pupil_group name # ['Teens', 'Class 2', 'Class 1']
rails g model pupil_school name # ['N/A']
rails g model pupil_status name # ['Active', 'Travelled', 'Inactive']
rails g model pupil name gender:references age:integer date_of_birth:date pupil_group:references pupil_school:references school_details:text extra_details:text address phone_no email pupil_status:references member_ids deleted_at:datetime
# serialize :member_ids, Array
rails g model pupil_attendance event_schedule:references pupil_group:references count:integer
rails g model pupil_register pupil_attendance:references pupil:references


rake uix:g c spoken_language church_office interest_area spiritual_gift
rake uix:g c member
rake uix:g c group group_position group_leaders group_members
rake uix:g c event_type event_schedule
rake uix:g c pupil_group pupil pupil_attendance pupil_schools pupil_register


rake uix:g m main members groups event-schedules
rake uix:g m sunday-school pupils pupil-groups pupil-attendances pupil-schools
rake uix:g m admin users church-offices spiritual-gifts spoken-languages interest-areas event-types roles
