class Track < ApplicationRecord
    validates :title, presence: true

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User
end
