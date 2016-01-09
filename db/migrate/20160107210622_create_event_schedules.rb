class CreateEventSchedules < ActiveRecord::Migration
  def change
    create_table :event_schedules do |t|
      t.string :name
      t.string :description
      t.boolean :special_event
      t.references :event_type, index: true, foreign_key: true
      t.datetime :start_date
      t.datetime :end_date
      t.string :group_ids, default: [].to_yaml
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
