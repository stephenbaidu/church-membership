class CreateCommittees < ActiveRecord::Migration
  def change
    create_table :committees do |t|
      t.string :name
      t.text :purpose
      t.date :commencement_date
      t.date :conclusion_date
      t.text :member_ids, default: [].to_yaml
      t.references :committee_status, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
