class CreateGroupPositions < ActiveRecord::Migration
  def change
    create_table :group_positions do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
