# == Schema Information
#
# Table name: pupil_schools
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PupilSchool < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  
  validates :name, presence: true, uniqueness: true
end
