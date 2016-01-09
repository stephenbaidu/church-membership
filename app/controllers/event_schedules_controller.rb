# This file was created by uix. Keep this line to allow uix to modify this file.
class EventSchedulesController < ApplicationController
  resourcify

  def upcoming_events
    records = EventSchedule.where('start_date >= ?', Date.today.beginning_of_day)
    records = records.limit(10)

    render json: records
  end
end
