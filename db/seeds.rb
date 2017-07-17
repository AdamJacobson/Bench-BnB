# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Bench.destroy_all

User.create!(username: "adam", password: "password")
User.create!(username: "anne", password: "password")

Bench.create!(description: "Beale St Bench", lat: 37.78958, lon: -122.3984002)
Bench.create!(description: "Rincon Park Bench", lat: 37.791246, lon: -122.3920997)
