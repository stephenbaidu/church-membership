# == Schema Information
#
# Table name: committees
#
#  id                  :integer          not null, primary key
#  name                :string
#  purpose             :text
#  commencement_date   :date
#  conclusion_date     :date
#  member_ids          :text             default([])
#  committee_status_id :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_committees_on_committee_status_id  (committee_status_id)
#

class Committee < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  
  serialize :member_ids, Array
  belongs_to :committee_status
end
