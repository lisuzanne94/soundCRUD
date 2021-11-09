class Track < ApplicationRecord
    validates :title, :uploader_id, :track_file, presence: true
    validates :genre, inclusion: { in: ['kpop', 'indie', 'hip-hop-rap', 'pop', 'edm', 'anime', 'rock', 'rb'] }

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
