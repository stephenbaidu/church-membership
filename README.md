# Church Membership

Rails & AngularJs based Church Management System, with a special module for the Children's Sunday School.

## Features
  - Member records
  - Events
  - Birthdays
  - Children's Sunday School
  - More features coming

## Installation

```
git clone git@github.com:stephenbaidu/church-membership.git churchapp
cd churchapp
rake db:create db:migrate app:setup
```
## Starting the rails api

You can now go ahead and run your rails server.
```
rails s
```

## Starting your grunt angular app
From another terminal, navigate to the root directory of your app, then
```
cd angular
sudo npm install && bower install
grunt serve
```

Because a defualt user was created from the `rake app:setup` task, login with `admin@exrails.com` and `adminadmin` as username and password respectively

# License

Licensed under the MIT license, see the separate MIT-LICENSE file.