# == Schema Information
#
# Table name: pupil_groups
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PupilGroup < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify

  validates :name, presence: true, uniqueness: true
end
