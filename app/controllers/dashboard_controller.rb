class DashboardController < ApplicationController
  include Pundit

  before_action :authorize_data

  def admin
    data = []

    # Event Schedules
    event_schedules = EventSchedule.where(start_date: Date.today.beginning_of_year..Date.today.end_of_year).map { |e|
      {
        title: e.name,
        type: ['important', 'info', 'special'][e.event_type_id - 1],
        startsAt: e.start_date,
        endsAt: e.end_date,
        resizable: true
      }
    }
    data = data + event_schedules

    # Adults' Birthdays
    birthdays = Member.has_birthday.group_by { |e|
      Date.today.year.to_s + e.date_of_birth.strftime('-%h-%d')
    }.map { |day, members|
      line =  members.map { |e| "#{e.name} [#{e.age} yrs]" }.join(', ')
      {
        title: "Adults' Birthdays (#{members.count}): " + line,
        type: 'warning',
        startsAt: Date.parse(day).beginning_of_day,
        endsAt: Date.parse(day).end_of_day,
        recursOn: 'year',
        resizable: true
      }
    }

    data = data + birthdays

    # Children's Birthdays
    birthdays = Pupil.has_birthday.group_by { |e|
      Date.today.year.to_s + e.date_of_birth.strftime('-%h-%d')
    }.map { |day, pupils|
      line =  pupils.map { |e| "#{e.name} [#{e.age} yrs]" }.join('<br>')
      {
        title: "Children's Birthdays (#{pupils.count}):<br>" + line,
        type: 'warning',
        startsAt: Date.parse(day).beginning_of_day,
        endsAt: Date.parse(day).end_of_day,
        # recursOn: 'year',
        resizable: true
      }
    }

    data = data + birthdays

    render json: data
  end

  def main
    data = {}
    data[:labels] = ["January", "February", "March", "April", "May", "June", "July"];
    data[:series] = ['Series A', 'Series B'];
    data[:data] = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ]
    
    data[:labels2] = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales"];
    data[:data2] = [300, 100, 40, 120];

    render json: data
  end

  def default
    data = {}
    data[:labels] = ["January", "February", "March", "April", "May", "June", "July"];
    data[:series] = ['Series A', 'Series B'];
    data[:data] = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ]
    
    data[:labels2] = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales"];
    data[:data2] = [300, 100, 40, 120];

    render json: data
  end

  def events
    data = []

    # Event Schedules
    event_schedules = EventSchedule.where(start_date: Date.today.beginning_of_year..Date.today.end_of_year).map { |e|
      {
        title: e.name,
        type: ['important', 'info', 'special'][e.event_type_id - 1],
        startsAt: e.start_date,
        endsAt: e.end_date,
        resizable: true
      }
    }
    data = data + event_schedules

    # Birthdays
    birthdays = Member.has_birthday.group_by { |e|
      Date.today.year.to_s + e.date_of_birth.strftime('-%h-%d')
    }.map { |day, members|
      line =  members.map { |e| "#{e.name} [#{e.age} yrs]" }.join(', ')
      {
        title: "Birthdays (#{members.count}): " + line,
        type: 'warning',
        startsAt: Date.parse(day).beginning_of_day,
        endsAt: Date.parse(day).beginning_of_day + 5.hours,
        recursOn: 'year',
        resizable: true
      }
    }

    data = data + birthdays

    render json: data
  end

  def sunday_school
    data = []

    # Event Schedules
    event_schedules = EventSchedule.where(start_date: Date.today.beginning_of_year..Date.today.end_of_year).map { |e|
      {
        title: e.name,
        type: ['important', 'info', 'special'][e.event_type_id - 1],
        startsAt: e.start_date,
        endsAt: e.end_date,
        resizable: true
      }
    }
    data = data + event_schedules

    # Birthdays
    birthdays = Pupil.has_birthday.group_by { |e|
      Date.today.year.to_s + e.date_of_birth.strftime('-%h-%d')
    }.map { |day, pupils|
      line =  pupils.map { |e| "#{e.name} [#{e.age} yrs]" }.join('<br>')
      {
        title: "Birthdays (#{pupils.count}):<br>" + line,
        type: 'warning',
        startsAt: Date.parse(day).beginning_of_day,
        endsAt: Date.parse(day).beginning_of_day + 5.hours,
        # recursOn: 'year',
        resizable: true
      }
    }

    data = data + birthdays

    render json: data
  end

  private
    def authorize_data
      true
    end
end
