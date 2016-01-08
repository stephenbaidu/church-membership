# == Schema Information
#
# Table name: event_types
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventType < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  
  validates :name, presence: true, uniqueness: true
end
