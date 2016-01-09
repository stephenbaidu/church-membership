# This file was created by uix. Keep this line to allow uix to modify this file.
class GroupsController < ApplicationController
  resourcify

  private
    # Override permitted params
    def permitted_params
      param_key        = :group
      excluded_fields  = ["id", "created_at", "updated_at", "lft", "rgt", "depth"]
      permitted_fields = (Group.column_names - excluded_fields).map { |f| f.to_sym }
      params.fetch(param_key, {}).permit([]).tap do |wl|
        permitted_fields.each { |f| wl[f] = params[param_key][f] if params[param_key].key?(f) }
      end
    end
end
