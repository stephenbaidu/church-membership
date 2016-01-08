# == Schema Information
#
# Table name: blood_groups
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BloodGroup < ActiveRecord::Base
  
  validates :name, presence: true, uniqueness: true
end
