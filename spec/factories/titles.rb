# == Schema Information
#
# Table name: titles
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :title do
    name "MyString"
  end

end
