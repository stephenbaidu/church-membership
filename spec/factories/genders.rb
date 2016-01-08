# == Schema Information
#
# Table name: genders
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :gender do
    name "MyString"
  end

end
