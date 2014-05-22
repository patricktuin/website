class Ingredient < ActiveRecord::Base
  belongs_to :recipe

 before_create :downcase

  private
    def downcase
      self.ingredient.downcase!
      self.unit.downcase!
     end
end
