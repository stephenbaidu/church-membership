# == Schema Information
#
# Table name: event_schedules
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :string
#  special_event :boolean
#  event_type_id :integer
#  start_date    :datetime
#  end_date      :datetime
#  group_ids     :string           default([])
#  deleted_at    :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_event_schedules_on_event_type_id  (event_type_id)
#

FactoryGirl.define do
  factory :event_schedule do
    name "MyString"
description "MyString"
special_event false
event_type nil
start_date "2016-01-07 21:06:23"
end_date "2016-01-07 21:06:23"
group_ids "MyString"
deleted_at "2016-01-07 21:06:23"
  end

end
