json.extract! comment, :id, :body, :created_at
json.commenter do 
    json.extract! comment.commenter, :id, :username
end