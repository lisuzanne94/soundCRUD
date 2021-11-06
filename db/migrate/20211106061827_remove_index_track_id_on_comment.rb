class RemoveIndexTrackIdOnComment < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, :track_id
    remove_index :comments, :commenter_id
  end
end
