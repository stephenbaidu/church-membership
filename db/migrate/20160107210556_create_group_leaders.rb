class CreateGroupLeaders < ActiveRecord::Migration
  def change
    create_table :group_leaders do |t|
      t.string :name
      t.references :group, index: true, foreign_key: true
      t.references :member, index: true, foreign_key: true
      t.references :group_position, index: true, foreign_key: true
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
