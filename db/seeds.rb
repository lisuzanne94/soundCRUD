require 'open-uri'

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
track1 = Track.create!(title: 'Shiki No Uta', uploader_id: user1.id, genre: 'hip-hop-rap') # suzinator
track2 = Track.create!(title: 'King\'s Dead', uploader_id: user8.id, genre: 'hip-hop-rap') # stelluhhh_
track3 = Track.create!(title: 'Butter', uploader_id: user3.id, genre: 'kpop') # peperoroll
track4 = Track.create!(title: 'Afternoon', uploader_id: user4.id, genre: 'kpop') # soheep
track5 = Track.create!(title: 'Sleepwalking', uploader_id: user2.id, genre: 'indie') # mostpopularcombo
track6 = Track.create!(title: 'Space Jam', uploader_id: user5.id, genre: 'pop') # mothammer
track7 = Track.create!(title: 'Baby Shark', uploader_id: user6.id, genre: 'pop') # yamme
track8 = Track.create!(title: 'Modal Soul', uploader_id: user1.id, genre: 'hip-hop-rap') # suzinator
track9 = Track.create!(title: 'naruto opening 1', uploader_id: user9.id, genre: 'anime') # wood
track10 = Track.create!(title: 'Taka-Mic', uploader_id: user1.id, genre: 'hip-hop-rap') # suzinator
track11 = Track.create!(title: 'Run It', uploader_id: user7.id, genre: 'hip-hop-rap') # pandanextdoor
track12 = Track.create!(title: 'Triumphant', uploader_id: user1.id, genre: 'hip-hop-rap') # suzinator

# AWS Seeds
track1_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shiki_no_uta.jpg')
track1.cover_image.attach(io: track1_image, filename: 'shiki_no_uta.jpg')

track2_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/kings-dead.jpg')
track2.cover_image.attach(io: track2_image, filename: 'kings-dead.jpg')

track3_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/butter-bts.jpg')
track3.cover_image.attach(io: track3_image, filename: 'butter-bts.jpg')

track4_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/blue-tape-jay-park.jpg')
track4.cover_image.attach(io: track4_image, filename: 'blue-tape-jay-park.jpg')

track5_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/sleepwalking-chain-gang.jpg')
track5.cover_image.attach(io: track5_image, filename: 'sleepwalking-chain-gang.jpg')

track6_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/space-jam.jpg')
track6.cover_image.attach(io: track6_image, filename: 'space-jam.jpg')

track7_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/baby-shark.jpg')
track7.cover_image.attach(io: track7_image, filename: 'baby-shark.jpg')

track8_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/modal-soul.jpg')
track8.cover_image.attach(io: track8_image, filename: 'modal-soul.jpg')

track9_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/naruto-ost.jpg')
track9.cover_image.attach(io: track9_image, filename: 'naruto-ost.jpg')

track10_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/taka-mic-shing02.jpg')
track10.cover_image.attach(io: track10_image, filename: 'taka-mic-shing02.jpg')

track11_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shang-chi.jpg')
track11.cover_image.attach(io: track11_image, filename: 'shang-chi.jpg')

track12_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/triumphant-shing02.jpg')
track12.cover_image.attach(io: track12_image, filename: 'triumphant-shing02.jpg')


puts 'Seed successful! :)'