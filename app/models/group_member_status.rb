# == Schema Information
#
# Table name: group_member_statuses
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GroupMemberStatus < ActiveRecord::Base
  
  validates :name, presence: true, uniqueness: true
end
