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

require 'rails_helper'

RSpec.describe EventSchedule, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
