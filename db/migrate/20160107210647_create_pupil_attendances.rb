class CreatePupilAttendances < ActiveRecord::Migration
  def change
    create_table :pupil_attendances do |t|
      t.references :event_schedule, index: true, foreign_key: true
      t.references :pupil_group, index: true, foreign_key: true
      t.integer :count

      t.timestamps null: false
    end
  end
end
