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

require 'rails_helper'

RSpec.describe PupilAttendance, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
