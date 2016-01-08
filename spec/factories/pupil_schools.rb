# == Schema Information
#
# Table name: pupil_schools
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :pupil_school do
    name "MyString"
  end

end
