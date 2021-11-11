class Track < ApplicationRecord
    validates :title, :uploader_id, :track_file, presence: true
    validates :genre, inclusion: { in: ['pop', 'hip-hop', 'anime/games', 'alternative', 'electronic'] }

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Comment

    has_one_attached :cover_image

    has_one_attached :track_file
end
