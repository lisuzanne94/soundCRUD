class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end

    add_index :tracks, :title
    add_index :tracks, :uploader_id
  end
end
