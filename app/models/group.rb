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

class Group < ActiveRecord::Base
  # The line below was inserted by uix.
  resourcify
  
  acts_as_nested_set

  serialize :user_ids, Array

  default_scope { where(deleted_at: nil) }

  validates_presence_of :name
  validates_numericality_of :total_member_count, :active_member_count, greater_than_or_equal_to: 0, :allow_blank => true
end
