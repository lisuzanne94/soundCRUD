json.extract! track, :id, :title, :genre
json.createdTime time_ago_in_words(track.created_at)

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
            json.commentCreatedTime time_ago_in_words(comment.created_at)
        end
    end
end

json.uploader do
    json.extract! track.uploader, :id, :username
    if track.uploader.profile_pic.attached?
        json.profilePic url_for(track.uploader.profile_pic)
    else
        json.profilePic 'https://soundcrud-seeds.s3.amazonaws.com/user-profile-pic/default-user-prof-pic.png'
    end
end

if track.cover_image.attached? 
    json.coverImage url_for(track.cover_image)
else 
    json.coverImage 'https://soundcrud-seeds.s3.amazonaws.com/tracks-cover-images/default-cover-img.png'
end

if track.track_file.attached? 
    json.trackFile url_for(track.track_file)
end