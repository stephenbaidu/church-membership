# == Schema Information
#
# Table name: pupils
#
#  id              :integer          not null, primary key
#  name            :string
#  gender_id       :integer
#  age             :integer
#  date_of_birth   :date
#  pupil_group_id  :integer
#  pupil_school_id :integer
#  school_details  :text
#  extra_details   :text
#  address         :string
#  phone_no        :string
#  email           :string
#  pupil_status_id :integer
#  member_ids      :string           default([])
#  deleted_at      :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_pupils_on_gender_id        (gender_id)
#  index_pupils_on_pupil_group_id   (pupil_group_id)
#  index_pupils_on_pupil_school_id  (pupil_school_id)
#  index_pupils_on_pupil_status_id  (pupil_status_id)
#

require 'rails_helper'

RSpec.describe Pupil, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
