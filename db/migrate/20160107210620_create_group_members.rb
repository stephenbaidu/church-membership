class CreateGroupMembers < ActiveRecord::Migration
  def change
    create_table :group_members do |t|
      t.references :group, index: true, foreign_key: true
      t.references :member, index: true, foreign_key: true
      t.date :date_joined
      t.references :group_member_status, index: true, foreign_key: true
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
