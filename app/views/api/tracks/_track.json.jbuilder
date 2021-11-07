json.extract! track, :id, :title, :uploader_id, :created_at, :genre

json.comments do
    track.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body
            json.commenter do 
                if comment.commenter.profile_pic.attached?
                    json.profilePic url_for(comment.commenter.profile_pic)
                else
                    json.profilePic 'https://soundcrud-seeds.s3.amazonaws.com/user-profile-pic/default-user-prof-pic.png'
                end
                json.extract! comment.commenter, :id, :username
            end
        end
    end
end

json.uploader track.uploader.username

if track.cover_image.attached? 
    json.coverImage url_for(track.cover_image)
else 
    json.coverImage 'https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/default-cover-img.png'
end
