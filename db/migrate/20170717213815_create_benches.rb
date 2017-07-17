class CreateBenches < ActiveRecord::Migration[5.1]
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.float :lat
      t.float :lon

      t.timestamps
    end
  end
end
