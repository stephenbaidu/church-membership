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

class GroupLeader < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :group
  belongs_to :member
  belongs_to :group_position

  default_scope { where(deleted_at: nil) }

  validates_presence_of :name
  validates_presence_of :group_id, :member_id, :group_position_id
end
