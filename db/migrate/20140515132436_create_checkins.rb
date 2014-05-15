class CreateCheckins < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.string :name
      t.string :title
      t.string :company

      t.timestamps
    end
  end
end
