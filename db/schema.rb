# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160107210649) do

  create_table "blood_groups", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "church_offices", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority"

  create_table "event_schedules", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.boolean  "special_event"
    t.integer  "event_type_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.boolean  "all_day"
    t.string   "group_ids",     default: "--- []\n"
    t.datetime "deleted_at"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "event_schedules", ["event_type_id"], name: "index_event_schedules_on_event_type_id"

  create_table "event_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "group_leaders", force: :cascade do |t|
    t.string   "name"
    t.integer  "group_id"
    t.integer  "member_id"
    t.integer  "group_position_id"
    t.datetime "deleted_at"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "group_leaders", ["group_id"], name: "index_group_leaders_on_group_id"
  add_index "group_leaders", ["group_position_id"], name: "index_group_leaders_on_group_position_id"
  add_index "group_leaders", ["member_id"], name: "index_group_leaders_on_member_id"

  create_table "group_member_statuses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "group_members", force: :cascade do |t|
    t.integer  "group_id"
    t.integer  "member_id"
    t.date     "date_joined"
    t.integer  "group_member_status_id"
    t.datetime "deleted_at"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "group_members", ["group_id"], name: "index_group_members_on_group_id"
  add_index "group_members", ["group_member_status_id"], name: "index_group_members_on_group_member_status_id"
  add_index "group_members", ["member_id"], name: "index_group_members_on_member_id"

  create_table "group_positions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.integer  "total_member_acount"
    t.integer  "active_member_acount"
    t.integer  "parent_id"
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
    t.string   "user_ids",             default: "--- []\n"
    t.datetime "deleted_at"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
  end

  create_table "interest_areas", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "marital_statuses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "member_statuses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", force: :cascade do |t|
    t.string   "name"
    t.integer  "title_id"
    t.string   "surname"
    t.string   "othernames"
    t.integer  "gender_id"
    t.date     "date_of_birth"
    t.integer  "age"
    t.integer  "marital_status_id"
    t.string   "home_town"
    t.integer  "region_id"
    t.string   "postal_address"
    t.string   "residential_address"
    t.string   "residential_landmak"
    t.string   "phone_numbers"
    t.string   "occupation"
    t.string   "institution_name"
    t.string   "institution_address"
    t.string   "email_address"
    t.string   "spoken_language_ids",      default: "--- []\n"
    t.string   "church_office_ids",        default: "--- []\n"
    t.string   "interest_area_ids",        default: "--- []\n"
    t.date     "date_joined"
    t.boolean  "baptized"
    t.date     "baptism_date"
    t.string   "baptismal_certificate_no"
    t.date     "date_of_rhf"
    t.string   "rhf_extended_by"
    t.integer  "blood_group_id"
    t.boolean  "holy_spirit_baptism"
    t.string   "spiritual_gift_ids",       default: "--- []\n"
    t.string   "next_of_kin_name"
    t.string   "next_of_kin_address"
    t.string   "next_of_kin_phone"
    t.string   "group_ids",                default: "--- []\n"
    t.integer  "member_status_id"
    t.datetime "deleted_at"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
  end

  add_index "members", ["blood_group_id"], name: "index_members_on_blood_group_id"
  add_index "members", ["gender_id"], name: "index_members_on_gender_id"
  add_index "members", ["marital_status_id"], name: "index_members_on_marital_status_id"
  add_index "members", ["member_status_id"], name: "index_members_on_member_status_id"
  add_index "members", ["region_id"], name: "index_members_on_region_id"
  add_index "members", ["title_id"], name: "index_members_on_title_id"

  create_table "permissions", force: :cascade do |t|
    t.string   "name"
    t.string   "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "permissions", ["name"], name: "index_permissions_on_name", unique: true

  create_table "pupil_attendances", force: :cascade do |t|
    t.integer  "event_schedule_id"
    t.integer  "pupil_group_id"
    t.integer  "count"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "pupil_attendances", ["event_schedule_id"], name: "index_pupil_attendances_on_event_schedule_id"
  add_index "pupil_attendances", ["pupil_group_id"], name: "index_pupil_attendances_on_pupil_group_id"

  create_table "pupil_groups", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pupil_registers", force: :cascade do |t|
    t.integer  "pupil_attendance_id"
    t.integer  "pupil_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "pupil_registers", ["pupil_attendance_id"], name: "index_pupil_registers_on_pupil_attendance_id"
  add_index "pupil_registers", ["pupil_id"], name: "index_pupil_registers_on_pupil_id"

  create_table "pupil_schools", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pupil_statuses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pupils", force: :cascade do |t|
    t.string   "name"
    t.integer  "gender_id"
    t.integer  "age"
    t.date     "date_of_birth"
    t.integer  "pupil_group_id"
    t.integer  "pupil_school_id"
    t.text     "school_details"
    t.text     "extra_details"
    t.string   "address"
    t.string   "phone_no"
    t.string   "email"
    t.integer  "pupil_status_id"
    t.string   "member_ids",      default: "--- []\n"
    t.datetime "deleted_at"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  add_index "pupils", ["gender_id"], name: "index_pupils_on_gender_id"
  add_index "pupils", ["pupil_group_id"], name: "index_pupils_on_pupil_group_id"
  add_index "pupils", ["pupil_school_id"], name: "index_pupils_on_pupil_school_id"
  add_index "pupils", ["pupil_status_id"], name: "index_pupils_on_pupil_status_id"

  create_table "regions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.text     "permissions", default: "--- []\n"
    t.string   "status"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "roles", ["name"], name: "index_roles_on_name", unique: true

  create_table "salary_rule_categories", force: :cascade do |t|
    t.boolean  "is_deduction_type"
    t.string   "name"
    t.integer  "parent_id"
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "salary_rule_categories", ["depth"], name: "index_salary_rule_categories_on_depth"
  add_index "salary_rule_categories", ["lft"], name: "index_salary_rule_categories_on_lft"
  add_index "salary_rule_categories", ["parent_id"], name: "index_salary_rule_categories_on_parent_id"
  add_index "salary_rule_categories", ["rgt"], name: "index_salary_rule_categories_on_rgt"

  create_table "salary_rule_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "salary_rules", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "salary_rule_category_id"
    t.string   "code"
    t.integer  "sequence"
    t.boolean  "appears_on_payslip"
    t.boolean  "is_active"
    t.string   "condition_based_on"
    t.string   "rules_dependent_on"
    t.integer  "salary_rule_type_id"
    t.string   "amount_formula"
    t.integer  "parent_id"
    t.integer  "lft"
    t.integer  "rgt"
    t.integer  "depth"
    t.text     "details"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "salary_rules", ["depth"], name: "index_salary_rules_on_depth"
  add_index "salary_rules", ["lft"], name: "index_salary_rules_on_lft"
  add_index "salary_rules", ["parent_id"], name: "index_salary_rules_on_parent_id"
  add_index "salary_rules", ["rgt"], name: "index_salary_rules_on_rgt"
  add_index "salary_rules", ["salary_rule_category_id"], name: "index_salary_rules_on_salary_rule_category_id"
  add_index "salary_rules", ["salary_rule_type_id"], name: "index_salary_rules_on_salary_rule_type_id"

  create_table "settings", force: :cascade do |t|
    t.string   "var",                   null: false
    t.text     "value"
    t.integer  "thing_id"
    t.string   "thing_type", limit: 30
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "settings", ["thing_type", "thing_id", "var"], name: "index_settings_on_thing_type_and_thing_id_and_var", unique: true

  create_table "spiritual_gifts", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spoken_languages", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "titles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",                                    null: false
    t.string   "uid",                    default: "",         null: false
    t.string   "encrypted_password",     default: "",         null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,          null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,          null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.text     "tokens"
    t.string   "role_ids",               default: "--- []\n"
    t.datetime "password_expired_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true

  create_table "versions", force: :cascade do |t|
    t.string   "item_type",  null: false
    t.integer  "item_id",    null: false
    t.string   "event",      null: false
    t.string   "whodunnit"
    t.text     "object"
    t.datetime "created_at"
  end

  add_index "versions", ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"

end
