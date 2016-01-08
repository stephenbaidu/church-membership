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

class GroupMember < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :group
  belongs_to :member
  belongs_to :group_member_status

  default_scope { where(deleted_at: nil) }

  validates_presence_of :group_id, :member_id, :group_member_status_id
end
