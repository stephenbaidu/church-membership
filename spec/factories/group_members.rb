# == Schema Information
#
# Table name: group_members
#
#  id                     :integer          not null, primary key
#  group_id               :integer
#  member_id              :integer
#  date_joined            :date
#  group_member_status_id :integer
#  deleted_at             :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_group_members_on_group_id                (group_id)
#  index_group_members_on_group_member_status_id  (group_member_status_id)
#  index_group_members_on_member_id               (member_id)
#

FactoryGirl.define do
  factory :group_member do
    group nil
member nil
date_joined "2016-01-07"
group_member_status nil
deleted_at "2016-01-07 21:06:20"
  end

end
