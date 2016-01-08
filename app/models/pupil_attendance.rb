# == Schema Information
#
# Table name: pupil_attendances
#
#  id                :integer          not null, primary key
#  event_schedule_id :integer
#  pupil_group_id    :integer
#  count             :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_pupil_attendances_on_event_schedule_id  (event_schedule_id)
#  index_pupil_attendances_on_pupil_group_id     (pupil_group_id)
#

class PupilAttendance < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :event_schedule
  belongs_to :pupil_group

  validates_numericality_of :count, greater_than_or_equal_to: 0
  validates_presence_of :event_schedule_id, :pupil_group_id
end
