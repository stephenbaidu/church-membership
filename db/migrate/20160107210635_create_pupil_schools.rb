class CreatePupilSchools < ActiveRecord::Migration
  def change
    create_table :pupil_schools do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
