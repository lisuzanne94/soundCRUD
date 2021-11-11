# require 'open-uri'

# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Track.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('tracks')
# ActiveRecord::Base.connection.reset_pk_sequence!('comments')


# # Users
# guest = User.create!(username: 'guest', password: 'password')
# user1 = User.create!(username: 'suzinator', password: 'password')
# user2 = User.create!(username: 'mostpopularcombo', password: 'password')
# user3 = User.create!(username: 'peperoroll', password: 'password')
# user4 = User.create!(username: 'soheep', password: 'password')
# user5 = User.create!(username: 'mothammer', password: 'password')
# user6 = User.create!(username: 'yamme', password: 'password')
# user7 = User.create!(username: 'pandanextdoor', password: 'password')
# user8 = User.create!(username: 'stelluhhh_', password: 'password')
# user9 = User.create!(username: 'wood', password: 'password')


# # Tracks
# track1 = Track.create!(title: 'Shiki No Uta', uploader_id: user1.id, genre: 'hip-hop') # suzinator
# track2 = Track.create!(title: 'King\'s Dead', uploader_id: user8.id, genre: 'hip-hop') # stelluhhh_
# track3 = Track.create!(title: 'Butter', uploader_id: user3.id, genre: 'kpop') # peperoroll
# track4 = Track.create!(title: 'Afternoon', uploader_id: user4.id, genre: 'kpop') # soheep
# track5 = Track.create!(title: 'Sleepwalking', uploader_id: user2.id, genre: 'indie') # mostpopularcombo
# track6 = Track.create!(title: 'Space Jam', uploader_id: user5.id, genre: 'pop') # mothammer
# track7 = Track.create!(title: 'Baby Shark', uploader_id: user6.id, genre: 'pop') # yamme
# track8 = Track.create!(title: 'Modal Soul', uploader_id: user1.id, genre: 'hip-hop') # suzinator
# track9 = Track.create!(title: 'naruto opening 1', uploader_id: user9.id, genre: 'anime') # wood
# track10 = Track.create!(title: 'Taka-Mic', uploader_id: user1.id, genre: 'hip-hop') # suzinator
# track11 = Track.create!(title: 'Run It', uploader_id: user7.id, genre: 'hip-hop') # pandanextdoor
# track12 = Track.create!(title: 'Triumphant', uploader_id: user1.id, genre: 'hip-hop') # suzinator

# # Comments
# comment1 = Comment.create!(body: 'first!!!', commenter_id: 2, track_id: 1) #suzinator, shiki no uta
# comment2 = Comment.create!(body: 'second comment :0', commenter_id: 3, track_id: 1) #mostpopularcombo, shiki no uta

# # AWS Seeds
# track1_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shiki_no_uta.jpg')
# track1.cover_image.attach(io: track1_image, filename: 'shiki_no_uta.jpg')

# track2_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/kings-dead.jpg')
# track2.cover_image.attach(io: track2_image, filename: 'kings-dead.jpg')

# track3_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/butter-bts.jpg')
# track3.cover_image.attach(io: track3_image, filename: 'butter-bts.jpg')

# track4_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/blue-tape-jay-park.jpg')
# track4.cover_image.attach(io: track4_image, filename: 'blue-tape-jay-park.jpg')

# track5_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/sleepwalking-chain-gang.jpg')
# track5.cover_image.attach(io: track5_image, filename: 'sleepwalking-chain-gang.jpg')

# track6_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/space-jam.jpg')
# track6.cover_image.attach(io: track6_image, filename: 'space-jam.jpg')

# track7_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/baby-shark.jpg')
# track7.cover_image.attach(io: track7_image, filename: 'baby-shark.jpg')

# track8_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/modal-soul.jpg')
# track8.cover_image.attach(io: track8_image, filename: 'modal-soul.jpg')

# track9_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/naruto-ost.jpg')
# track9.cover_image.attach(io: track9_image, filename: 'naruto-ost.jpg')

# track10_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/taka-mic-shing02.jpg')
# track10.cover_image.attach(io: track10_image, filename: 'taka-mic-shing02.jpg')

# track11_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shang-chi.jpg')
# track11.cover_image.attach(io: track11_image, filename: 'shang-chi.jpg')

# track12_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/triumphant-shing02.jpg')
# track12.cover_image.attach(io: track12_image, filename: 'triumphant-shing02.jpg')

# puts 'Seed successful! :)'

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
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('tracks')


# Users
guest = User.create!(username: 'guest', password: 'password')
user1 = User.create!(username: 'suzinator', password: 'password')
user2 = User.create!(username: 'mostpopularcombo', password: 'password')
user3 = User.create!(username: 'Garey', password: 'password')
user4 = User.create!(username: 'soheep', password: 'password')
user5 = User.create!(username: 'mothammer', password: 'password')
user6 = User.create!(username: 'yamme', password: 'password')
user7 = User.create!(username: 'pandanextdoor', password: 'password')
user8 = User.create!(username: 'stelluhhh_', password: 'password')
user9 = User.create!(username: 'wood', password: 'password')
user10 = User.create!(username: 'peperoroll', password: 'password')
user11 = User.create!(username: 'steveox', password: 'password')
user12 = User.create!(username: 'cathy', password: 'password')



# Tracks
track1 = Track.create!(title: 'Aruarian Dance', uploader_id: user1.id, genre: 'hip-hop') # suzinator
track2 = Track.create!(title: 'To Zanarkand', uploader_id: user3.id, genre: 'anime/games') # Garey
track3 = Track.create!(title: 'Stay', uploader_id: user7.id, genre: 'pop') # pandanextdoor
track4 = Track.create!(title: 'Afternoon', uploader_id: user4.id, genre: 'pop') # soheep
track5 = Track.create!(title: 'Sleepwalking', uploader_id: user2.id, genre: 'alternative') # mostpopularcombo
track6 = Track.create!(title: 'Pachuca Sunrise', uploader_id: user5.id, genre: 'alternative') # mothammer
track7 = Track.create!(title: 'Shiki No Uta', uploader_id: user6.id, genre: 'hip-hop') # yamme
track8 = Track.create!(title: 'Battle Cry', uploader_id: user1.id, genre: 'hip-hop') # suzinator
track9 = Track.create!(title: 'naruto opening 1', uploader_id: user9.id, genre: 'anime/games') # wood
track10 = Track.create!(title: 'pokemon trainer red theme', uploader_id: user6.id, genre: 'anime/games') # yamme
track11 = Track.create!(title: 'Wedding Dress', uploader_id: user8.id, genre: 'pop') # stelluhhh_
track12 = Track.create!(title: 'Me n U', uploader_id: user8.id, genre: 'hip-hop') # stelluhhh_
track13 = Track.create!(title: 'Run It', uploader_id: user11.id, genre: 'hip-hop') # steveox
track14 = Track.create!(title: 'Shingeki no Kyojin', uploader_id: user11.id, genre: 'anime/games') # steveox
track15 = Track.create!(title: 'The World Is Ours', uploader_id: user1.id, genre: 'electronic') # suzinator
track16 = Track.create!(title: 'Youth', uploader_id: user3.id, genre: 'electronic') # Garey
track17 = Track.create!(title: 'Asterisk', uploader_id: user2.id, genre: 'anime/games') # mostpopularcombo
track18 = Track.create!(title: 'Trying To Be Cool', uploader_id: user1.id, genre: 'alternative') # suzinator
track19 = Track.create!(title: 'One Summer', uploader_id: user11.id, genre: 'anime/games') # cathy
track20 = Track.create!(title: 'Ellinia', uploader_id: user10.id, genre: 'anime/games') # peperoroll
track21 = Track.create!(title: 'Roses', uploader_id: user4.id, genre: 'pop') # soheep
track22 = Track.create!(title: 'Lisztomania', uploader_id: user2.id, genre: 'alternative') # suzinator
track23 = Track.create!(title: 'Out Of My League', uploader_id: user2.id, genre: 'alternative') # suzinator
track24 = Track.create!(title: 'Waves', uploader_id: user11.id, genre: 'electronic') # steveox
track25 = Track.create!(title: 'Your Ex-Lover Is Dead', uploader_id: user5.id, genre: 'alternative') # mothammer
track26 = Track.create!(title: 'Fool\'s Gold', uploader_id: user3.id, genre: 'alternative') # Garey
track27 = Track.create!(title: 'Simmple & Clean', uploader_id: user6.id, genre: 'anime/games') # yamme
track28 = Track.create!(title: 'Catching On', uploader_id: user1.id, genre: 'pop') # yamme
track29 = Track.create!(title: 'Ain\'t It Fun', uploader_id: user11.id, genre: 'pop') # steveox
track30 = Track.create!(title: 'Go With It', uploader_id: user2.id, genre: 'electronic') # suzinator

# AWS Seeds
track1_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/aruarian-dance.jpg')
track1.cover_image.attach(io: track1_image, filename: 'aruarian-dance.jpg')
track1_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/aruarian-dance.mp3')
track1.track_file.attach(io: track1.track, filename: 'aruarian-dance.mp3')

track2_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/to-zanarkand.png')
track2.cover_image.attach(io: track2_image, filename: 'to-zanarkand.png')
track2_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/to-zanarkand.mp3')
track2.track_file.attach(io: track2.track, filename: 'to-zanarkand.mp3')

track3_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/stay.png')
track3.cover_image.attach(io: track3_image, filename: 'stay.png')
track3_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/stay.mp3')
track3.track_file.attach(io: track3.track, filename: 'stay.mp3')

track4_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/blue-tape-jay-park.jpg')
track4.cover_image.attach(io: track4_image, filename: 'blue-tape-jay-park.jpg')
track4_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/afternoon.mp3')
track4.track_file.attach(io: track4.track, filename: 'afternoon.mp3')


track5_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/sleepwalking-chain-gang.jpg')
track5.cover_image.attach(io: track5_image, filename: 'sleepwalking-chain-gang.jpg')
track5_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/sleepwalking.mp3')
track5.track_file.attach(io: track5.track, filename: 'sleepwalking.mp3')


track6_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/pachuca-sunrise.png')
track6.cover_image.attach(io: track6_image, filename: 'pachuca-sunrise.png')
track6_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/pachuca-sunrise.mp3')
track6.track_file.attach(io: track6.track, filename: 'pachuca-sunrise.mp3')


track7_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shiki_no_uta.jpg')
track7.cover_image.attach(io: track7_image, filename: 'shiki_no_uta.jpg')
track7_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/shiki-no-uta.mp3')
track7.track_file.attach(io: track7.track, filename: 'shiki-no-uta.mp3')


track8_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/battlecry.png')
track8.cover_image.attach(io: track8_image, filename: 'battlecry.png')
track8_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/battlecry.mp3')
track8.track_file.attach(io: track8.track, filename: 'battlecry.mp3')


track9_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/naruto-ost.jpg')
track9.cover_image.attach(io: track9_image, filename: 'naruto-ost.jpg')
track9_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/rocks-hound-dog.mp3')
track9.track_file.attach(io: track9.track, filename: 'rocks-hound-dog.mp3')


track10_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/pokemon-trainer-red-theme.png')
track10.cover_image.attach(io: track10_image, filename: 'pokemon-trainer-red-theme.png')
track10_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/pokemon-trainer-red-theme.mp3')
track10.track_file.attach(io: track10.track, filename: 'pokemon-trainer-red-theme.mp3')


track11_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/wedding-dress.png')
track11.cover_image.attach(io: track11_image, filename: 'wedding-dress.png')
track11_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/wedding-dress.mp3')
track11.track_file.attach(io: track11.track, filename: 'wedding-dress.mp3')


track12_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/me-n-u.png')
track12.cover_image.attach(io: track12_image, filename: 'me-n-u.png')
track12_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/me-n-u-cassie.mp3')
track12.track_file.attach(io: track12.track, filename: 'me-n-u-cassie.mp3')


track13_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shang-chi.jpg')
track13.cover_image.attach(io: track13_image, filename: 'shang-chi.jpg')
track13_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/run-it.mp3')
track13.track_file.attach(io: track13.track, filename: 'run-it.mp3')


track14_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/shingeki-no-kyojin.png')
track14.cover_image.attach(io: track14_image, filename: 'shingeki-no-kyojin.png')
track14_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/shingeki-no-kyojin-aot.mp3')
track14.track_file.attach(io: track14.track, filename: 'shingeki-no-kyojin-aot.mp3')


track15_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/the-world-is-ours.png')
track15.cover_image.attach(io: track15_image, filename: 'the-world-is-ours.png')
track15_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/the-world-is-ours.mp3')
track15.track_file.attach(io: track15.track, filename: 'the-world-is-ours.mp3')


track16_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/youth.png')
track16.cover_image.attach(io: track16_image, filename: 'youth.png')
track16_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/youth-manila-killa.mp3')
track16.track_file.attach(io: track16.track, filename: 'youth-manila-killa.mp3')


track17_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/asterisk.png')
track17.cover_image.attach(io: track17_image, filename: 'asterisk.png')
track17_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/asterisk.mp3')
track17.track_file.attach(io: track17.track, filename: 'asterisk.mp3')


track18_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/trying-to-be-cool.png')
track18.cover_image.attach(io: track18_image, filename: 'trying-to-be-cool.png')
track18_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/trying-to-be-cool.mp3')
track18.track_file.attach(io: track18.track, filename: 'trying-to-be-cool.mp3')


track19_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/one-summer-day.png')
track19.cover_image.attach(io: track19_image, filename: 'one-summer-day.png')
track19_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/one-summer-day.mp3')
track19.track_file.attach(io: track19.track, filename: 'one-summer-day.mp3')


track20_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/ellinia.png')
track20.cover_image.attach(io: track20_image, filename: 'ellinia.png')
track20_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/ellinia.mp3')
track20.track_file.attach(io: track20.track, filename: 'ellinia.mp3')


track21_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/roses.png')
track21.cover_image.attach(io: track21_image, filename: 'roses.png')
track21_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/roses.mp3')
track21.track_file.attach(io: track21.track, filename: 'roses.mp3')


track22_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/wolfgang-amadeus-phoenix.jpg')
track22.cover_image.attach(io: track22_image, filename: 'wolfgang-amadeus-phoenix.jpg')
track22_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/lisztomania.mp3')
track22.track_file.attach(io: track22.track, filename: 'lisztomania.mp3')


track23_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/fools-gold.png')
track23.cover_image.attach(io: track23_image, filename: 'fools-gold.png')
track23_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/out-of-my-league.mp3')
track23.track_file.attach(io: track23.track, filename: 'out-of-my-league.mp3')


track24_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/waves.png')
track24.cover_image.attach(io: track24_image, filename: 'waves.png')
track24_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/waves.mp3')
track24.track_file.attach(io: track24.track, filename: 'waves.mp3')


track25_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/your-ex-lover-is-dead.png')
track25.cover_image.attach(io: track25_image, filename: 'your-ex-lover-is-dead.png')
track25_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/your-ex-lover-is-dead.mp3')
track25.track_file.attach(io: track25.track, filename: 'your-ex-lover-is-dead.mp3')


track26_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/fools-gold.png')
track26.cover_image.attach(io: track26_image, filename: 'fools-gold.png')
track26_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/fools-gold.mp3')
track26.track_file.attach(io: track26.track, filename: 'fools-gold.mp3')


track27_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/simple-and-clean.png')
track27.cover_image.attach(io: track27_image, filename: 'simple-and-clean.png')
track27_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/simple-and-clean.mp3')
track27.track_file.attach(io: track27.track, filename: 'simple-and-clean.mp3')


track28_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/catching-on.png')
track28.cover_image.attach(io: track28_image, filename: 'catching-on.png')
track28_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/catching-on.mp3')
track28.track_file.attach(io: track28.track, filename: 'catching-on.mp3')


track29_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/aint-it-fun.png')
track29.cover_image.attach(io: track29_image, filename: 'aint-it-fun.png')
track29_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/aint-it-fun.mp3')
track29.track_file.attach(io: track29.track, filename: 'aint-it-fun.mp3')


track30_image = open('https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/go-with-it.png')
track30.cover_image.attach(io: track30_image, filename: 'go-with-it.png')
track30_track = open('https://soundcrud-seeds.s3.amazonaws.com/tracks/go-with-it.mp3')
track30.track_file.attach(io: track30.track, filename: 'go-with-it.mp3')


puts 'Seed successful! :)'