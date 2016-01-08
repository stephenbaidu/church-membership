# == Schema Information
#
# Table name: church_offices
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :church_office do
    name "MyString"
  end

end
