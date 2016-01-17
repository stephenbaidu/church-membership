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

require 'rails_helper'

RSpec.describe Committee, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
