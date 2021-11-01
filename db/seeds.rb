# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all


# Users
guest = User.create!(username: 'guest', password: 'password')
user1 = User.create!(username: 'peperoroll', password: 'password')
user2 = User.create!(username: 'suzinator', password: 'password')

# Tracks
track1 = Track.create!(title: 'Shiki No Uta', uploader_id: user2.id)
track2 = Track.create!(title: 'Rolling Star', uploader_id: guest.id)

puts 'Seed successful! :)'