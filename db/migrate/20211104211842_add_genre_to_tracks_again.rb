class AddGenreToTracksAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :genre, :string
  end
end
