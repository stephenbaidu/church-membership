class CreatePupilRegisters < ActiveRecord::Migration
  def change
    create_table :pupil_registers do |t|
      t.references :pupil_attendance, index: true, foreign_key: true
      t.references :pupil, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
