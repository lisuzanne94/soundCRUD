class Track < ApplicationRecord
    validates :title, presence: true

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_one_attached :cover_image
    has_one_attached :default_cover_image
end
