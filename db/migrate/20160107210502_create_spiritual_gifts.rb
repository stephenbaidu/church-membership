class CreateSpiritualGifts < ActiveRecord::Migration
  def change
    create_table :spiritual_gifts do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
