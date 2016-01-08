class CreateSpokenLanguages < ActiveRecord::Migration
  def change
    create_table :spoken_languages do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
