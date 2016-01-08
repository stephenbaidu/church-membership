# == Schema Information
#
# Table name: marital_statuses
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MaritalStatus < ActiveRecord::Base
  
  validates :name, presence: true, uniqueness: true
end
