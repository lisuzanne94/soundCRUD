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
user1 = User.create!(username: 'suzinator', password: 'password')
user2 = User.create!(username: 'mostpopularcombo', password: 'password')
user3 = User.create!(username: 'peperoroll', password: 'password')
user4 = User.create!(username: 'soheep', password: 'password')
user5 = User.create!(username: 'mothammer', password: 'password')
user6 = User.create!(username: 'yamme', password: 'password')
user7 = User.create!(username: 'pandanextdoor', password: 'password')
user8 = User.create!(username: 'stelluhhh_', password: 'password')
user9 = User.create!(username: 'wood', password: 'password')


# Tracks
track1 = Track.create!(title: 'Shiki No Uta', uploader_id: user1.id) # suzinator
track2 = Track.create!(title: 'King\'s Dead', uploader_id: user8.id) # stelluhhh_
track3 = Track.create!(title: 'Butter', uploader_id: user3.id) # peperoroll
track4 = Track.create!(title: 'Sleepwalking', uploader_id: user2.id) # mostpopularcombo
track5 = Track.create!(title: 'Modal Soul', uploader_id: user1.id) # suzinator
track6 = Track.create!(title: 'Baby Shark', uploader_id: user6.id) # yamme
track7 = Track.create!(title: 'naruto opening 1', uploader_id: user9.id) # wood
track8 = Track.create!(title: 'me like yuh', uploader_id: user4.id) # soheep
track9 = Track.create!(title: 'Lisztomania', uploader_id: user5.id) # mothammer
track10 = Track.create!(title: 'Taka-Mic', uploader_id: user1.id) # suzinator
track11 = Track.create!(title: 'Run It', uploader_id: user7.id) # pandanextdoor
track12 = Track.create!(title: 'Triumphant', uploader_id: user1.id) # suzinator

puts 'Seed successful! :)'