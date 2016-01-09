# == Schema Information
#
# Table name: event_schedules
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :string
#  special_event :boolean
#  event_type_id :integer
#  start_date    :datetime
#  end_date      :datetime
#  group_ids     :string           default([])
#  deleted_at    :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_event_schedules_on_event_type_id  (event_type_id)
#

class EventSchedule < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :event_type

  serialize :group_ids, Array

  default_scope { where(deleted_at: nil) }

  validates_presence_of :name, :start_date, :end_date
  validates_presence_of :event_type_id
end
