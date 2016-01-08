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

require 'rails_helper'

RSpec.describe PupilRegister, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
