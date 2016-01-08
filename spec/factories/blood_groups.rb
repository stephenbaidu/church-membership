# == Schema Information
#
# Table name: blood_groups
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :blood_group do
    name "MyString"
  end

end
