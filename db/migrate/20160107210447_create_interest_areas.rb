class CreateInterestAreas < ActiveRecord::Migration
  def change
    create_table :interest_areas do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
