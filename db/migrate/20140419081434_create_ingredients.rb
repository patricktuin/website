class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :ingredient
      t.integer :amount
      t.string :unit
      t.references :recipe, index: true

      t.timestamps
    end
  end
end
