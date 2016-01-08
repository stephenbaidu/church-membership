# == Schema Information
#
# Table name: pupils
#
#  id              :integer          not null, primary key
#  name            :string
#  gender_id       :integer
#  age             :integer
#  date_of_birth   :date
#  pupil_group_id  :integer
#  pupil_school_id :integer
#  school_details  :text
#  extra_details   :text
#  address         :string
#  phone_no        :string
#  email           :string
#  pupil_status_id :integer
#  member_ids      :string           default([])
#  deleted_at      :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_pupils_on_gender_id        (gender_id)
#  index_pupils_on_pupil_group_id   (pupil_group_id)
#  index_pupils_on_pupil_school_id  (pupil_school_id)
#  index_pupils_on_pupil_status_id  (pupil_status_id)
#

FactoryGirl.define do
  factory :pupil do
    name "MyString"
gender nil
age 1
date_of_birth "2016-01-07"
pupil_group nil
pupil_school nil
school_details "MyText"
extra_details "MyText"
address "MyString"
phone_no "MyString"
email "MyString"
pupil_status nil
member_ids "MyString"
deleted_at "2016-01-07 21:05:16"
  end

end
