class AddIndicesToComments < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :commenter_id
    add_index :comments, :track_id
  end
end
