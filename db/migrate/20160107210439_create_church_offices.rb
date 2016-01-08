class CreateChurchOffices < ActiveRecord::Migration
  def change
    create_table :church_offices do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
