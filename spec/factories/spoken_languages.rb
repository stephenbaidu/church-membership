# == Schema Information
#
# Table name: spoken_languages
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :spoken_language do
    name "MyString"
  end

end
