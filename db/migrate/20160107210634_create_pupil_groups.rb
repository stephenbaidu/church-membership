class CreatePupilGroups < ActiveRecord::Migration
  def change
    create_table :pupil_groups do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
