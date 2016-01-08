# == Schema Information
#
# Table name: interest_areas
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :interest_area do
    name "MyString"
  end

end
