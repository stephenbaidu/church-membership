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

class Pupil < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  belongs_to :gender
  belongs_to :pupil_group
  belongs_to :pupil_school
  belongs_to :pupil_status

  serialize :member_ids, Array

  default_scope { where(deleted_at: nil) }

  scope :has_birthday, -> { where('date_of_birth NOT NULL') }

  validates_presence_of :name
  validates_numericality_of :age, greater_than_or_equal_to: 0, :allow_blank => true
  validates_presence_of :gender_id, :pupil_group_id, :pupil_school_id, :pupil_status_id
end
