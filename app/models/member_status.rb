# == Schema Information
#
# Table name: member_statuses
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MemberStatus < ActiveRecord::Base
  
  validates :name, presence: true, uniqueness: true
end
