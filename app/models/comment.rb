class Comment < ApplicationRecord
    validates :body, :commenter_id, :track_id, presence: true

    belongs_to :commenter,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track
end
