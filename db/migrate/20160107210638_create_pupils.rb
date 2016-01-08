class CreatePupils < ActiveRecord::Migration
  def change
    create_table :pupils do |t|
      t.string :name
      t.references :gender, index: true, foreign_key: true
      t.integer :age
      t.date :date_of_birth
      t.references :pupil_group, index: true, foreign_key: true
      t.references :pupil_school, index: true, foreign_key: true
      t.text :school_details
      t.text :extra_details
      t.string :address
      t.string :phone_no
      t.string :email
      t.references :pupil_status, index: true, foreign_key: true
      t.string :member_ids, default: [].to_yaml
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
