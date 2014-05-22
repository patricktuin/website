class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :recipe_type
      t.text :description
      t.string :img_url
      t.text :preparation

      t.timestamps
    end
  end
end
