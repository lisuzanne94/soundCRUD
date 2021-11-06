class Track < ApplicationRecord
    validates :title, :uploader_id, presence: true
    validates :genre, inclusion: { in: ['kpop', 'indie', 'hip-hop-rap', 'pop', 'edm', 'anime', 'rock', 'rb'] }

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_one_attached :cover_image
end
