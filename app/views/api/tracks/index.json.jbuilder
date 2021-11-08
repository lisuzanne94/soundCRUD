@tracks.each do |track|
    json.set! track.id do
        json.partial! 'track', track: track
        if track.cover_image.attached? 
            json.set! "coverImage", url_for(track.cover_image)
        else 
            json.set! "coverImage", 'https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/default-cover-img.png'
        end
    end
end