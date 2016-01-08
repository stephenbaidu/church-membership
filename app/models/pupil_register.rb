# == Schema Information
#
# Table name: pupil_registers
#
#  id                  :integer          not null, primary key
#  pupil_attendance_id :integer
#  pupil_id            :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_pupil_registers_on_pupil_attendance_id  (pupil_attendance_id)
#  index_pupil_registers_on_pupil_id             (pupil_id)
#

class PupilRegister < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :pupil_attendance
  belongs_to :pupil

  validates_presence_of :pupil_attendance_id, :pupil_group_id
end
