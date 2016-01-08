# == Schema Information
#
# Table name: members
#
#  id                       :integer          not null, primary key
#  name                     :string
#  title_id                 :integer
#  surname                  :string
#  othernames               :string
#  gender_id                :integer
#  date_of_birth            :date
#  age                      :integer
#  marital_status_id        :integer
#  home_town                :string
#  region_id                :integer
#  postal_address           :string
#  residential_address      :string
#  residential_landmak      :string
#  phone_numbers            :string
#  occupation               :string
#  institution_name         :string
#  institution_address      :string
#  email_address            :string
#  spoken_language_ids      :string           default([])
#  church_office_ids        :string           default([])
#  interest_area_ids        :string           default([])
#  date_joined              :date
#  baptized                 :boolean
#  baptism_date             :date
#  baptismal_certificate_no :string
#  date_of_rhf              :date
#  rhf_extended_by          :string
#  blood_group_id           :integer
#  holy_spirit_baptism      :boolean
#  spiritual_gift_ids       :string           default([])
#  next_of_kin_name         :string
#  next_of_kin_address      :string
#  next_of_kin_phone        :string
#  group_ids                :string           default([])
#  member_status_id         :integer
#  deleted_at               :datetime
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#
# Indexes
#
#  index_members_on_blood_group_id     (blood_group_id)
#  index_members_on_gender_id          (gender_id)
#  index_members_on_marital_status_id  (marital_status_id)
#  index_members_on_member_status_id   (member_status_id)
#  index_members_on_region_id          (region_id)
#  index_members_on_title_id           (title_id)
#

FactoryGirl.define do
  factory :member do
    name "MyString"
title nil
surname "MyString"
othernames "MyString"
gender nil
date_of_birth "2016-01-07"
age 1
marital_status nil
home_town "MyString"
region nil
postal_address "MyString"
residential_address "MyString"
residential_landmak "MyString"
phone_numbers "MyString"
occupation "MyString"
institution_name "MyString"
institution_address "MyString"
email_address "MyString"
spoken_language_ids "MyString"
church_office_ids "MyString"
interest_area_ids "MyString"
date_joined "2016-01-07"
baptized false
baptism_date "2016-01-07"
baptismal_certificate_no "MyString"
date_of_rhf "2016-01-07"
rhf_extended_by "MyString"
blood_group nil
holy_spirit_baptism false
spiritual_gift_ids "MyString"
next_of_kin_name "MyString"
next_of_kin_address "MyString"
next_of_kin_phone "MyString"
group_ids "MyString"
member_status nil
deleted_at "2016-01-07 21:05:16"
  end

end
