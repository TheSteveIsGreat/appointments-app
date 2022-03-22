# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'


5.times do
  u = User.create(name: Faker::Name.name)
  d = Doctor.create(name: Faker::Name.name)
  Appointment.create(appointment_date: Faker::Date.forward(days: 30), user_id:u.id, doctor_id:d.id )
  Appointment.create(appointment_date: Faker::Date.forward(days: 30), user_id:u.id, doctor_id:d.id )
  Appointment.create(appointment_date: Faker::Date.forward(days: 30), user_id:u.id, doctor_id:d.id )
end