class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :name
      t.references :title, index: true, foreign_key: true
      t.string :surname
      t.string :othernames
      t.references :gender, index: true, foreign_key: true
      t.date :date_of_birth
      t.integer :age
      t.references :marital_status, index: true, foreign_key: true
      t.string :home_town
      t.references :region, index: true, foreign_key: true
      t.string :postal_address
      t.string :residential_address
      t.string :residential_landmak
      t.string :phone_numbers
      t.string :occupation
      t.string :institution_name
      t.string :institution_address
      t.string :email_address
      t.string :spoken_language_ids, default: [].to_yaml
      t.string :church_office_ids, default: [].to_yaml
      t.string :interest_area_ids, default: [].to_yaml
      t.date :date_joined
      t.boolean :baptized
      t.date :baptism_date
      t.string :baptismal_certificate_no
      t.date :date_of_rhf
      t.string :rhf_extended_by
      t.references :blood_group, index: true, foreign_key: true
      t.boolean :holy_spirit_baptism
      t.string :spiritual_gift_ids, default: [].to_yaml
      t.string :next_of_kin_name
      t.string :next_of_kin_address
      t.string :next_of_kin_phone
      t.string :group_ids, default: [].to_yaml
      t.references :member_status, index: true, foreign_key: true
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end
