class CreateGroupMemberStatuses < ActiveRecord::Migration
  def change
    create_table :group_member_statuses do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
