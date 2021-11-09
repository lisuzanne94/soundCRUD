json.extract! user, :id, :username

if user.profile_pic.attached?
    json.profilePic url_for(user.profile_pic)
else
    json.profilePic 'https://soundcrud-seeds.s3.amazonaws.com/user-profile-pic/default-user-prof-pic.png'
end