json.extract! track, :id, :title, :uploader, :uploader_id, :created_at

if track.cover_image.attached? 
    json.coverImage url_for(track.cover_image)
else 
    json.coverImage 'https://soundcrud-dev.s3.amazonaws.com/default-cover-img.png'
end
