json.extract! track, :id, :title, :uploader, :uploader_id, :created_at

json.coverImage url_for(track.cover_image) if track.cover_image.attached?
