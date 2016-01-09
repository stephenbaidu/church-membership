class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :total_member_count
      t.integer :active_member_count
      t.integer :parent_id
      t.integer :lft
      t.integer :rgt
      t.integer :depth
      t.string :user_ids, default: [].to_yaml
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
