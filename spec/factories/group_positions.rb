# == Schema Information
#
# Table name: group_positions
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :group_position do
    name "MyString"
  end

end
