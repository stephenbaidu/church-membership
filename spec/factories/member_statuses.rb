# == Schema Information
#
# Table name: member_statuses
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :member_status do
    name "MyString"
  end

end
