class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.string :date
      t.string :time
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
