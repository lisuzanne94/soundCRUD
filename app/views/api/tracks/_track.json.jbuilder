json.extract! track, :id, :title, :uploader_id, :created_at
json.uploader track.uploader.username

if track.cover_image.attached? 
    json.coverImage url_for(track.cover_image)
else 
    json.coverImage 'https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/default-cover-img.png'
end
