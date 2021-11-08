json.extract! comment, :id, :body, :created_at
json.commenter do 
    json.extract! comment.commenter, :id, :username
    if comment.commenter.profile_pic.attached?
        json.profilePic url_for(comment.commenter.profile_pic)
    else
        json.profilePic 'https://soundcrud-seeds.s3.amazonaws.com/user-profile-pic/default-user-prof-pic.png'
    end
end