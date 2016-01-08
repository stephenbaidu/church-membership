# == Schema Information
#
# Table name: group_leaders
#
#  id                :integer          not null, primary key
#  name              :string
#  group_id          :integer
#  member_id         :integer
#  group_position_id :integer
#  deleted_at        :datetime
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_group_leaders_on_group_id           (group_id)
#  index_group_leaders_on_group_position_id  (group_position_id)
#  index_group_leaders_on_member_id          (member_id)
#

require 'rails_helper'

RSpec.describe GroupLeader, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
