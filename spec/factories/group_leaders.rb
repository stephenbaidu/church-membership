# == Schema Information
#
# Table name: group_leaders
#
#  id                :integer          not null, primary key
#  name              :string
#  group_id          :integer
#  member_id         :integer
#  group_position_id :integer
#  deleted_at        :datetime
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_group_leaders_on_group_id           (group_id)
#  index_group_leaders_on_group_position_id  (group_position_id)
#  index_group_leaders_on_member_id          (member_id)
#

FactoryGirl.define do
  factory :group_leader do
    name "MyString"
group nil
member nil
group_position nil
deleted_at "2016-01-07 21:05:56"
  end

end
