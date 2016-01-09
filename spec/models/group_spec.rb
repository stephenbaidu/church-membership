# == Schema Information
#
# Table name: groups
#
#  id                  :integer          not null, primary key
#  name                :string
#  total_member_count  :integer
#  active_member_count :integer
#  parent_id           :integer
#  lft                 :integer
#  rgt                 :integer
#  depth               :integer
#  user_ids            :string           default([])
#  deleted_at          :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'rails_helper'

RSpec.describe Group, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
