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

FactoryGirl.define do
  factory :committee do
    name "MyString"
purpose "MyText"
commencement_date "2016-01-17"
conclusion_date "2016-01-17"
member_ids "MyText"
committee_status nil
  end

end
