# == Schema Information
#
# Table name: groups
#
#  id                  :integer          not null, primary key
#  name                :string
#  total_member_count  :integer
#  active_member_count :integer
#  parent_id           :integer
#  lft                 :integer
#  rgt                 :integer
#  depth               :integer
#  user_ids            :string           default([])
#  deleted_at          :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

FactoryGirl.define do
  factory :group do
    name "MyString"
total_member_count 1
active_member_count 1
parent_id 1
lft 1
rgt 1
depth 1
user_ids "MyString"
deleted_at "2016-01-07 21:05:30"
  end

end
