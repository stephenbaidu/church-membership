# == Schema Information
#
# Table name: spiritual_gifts
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :spiritual_gift do
    name "MyString"
  end

end
