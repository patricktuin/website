class IngredientsController < ApplicationController
  def create
    @recipe = Recipe.find(params[:recipe_id])
    #render :text => (params[:recipe_id])
    @ingredient = @recipe.ingredients.create(ingredient_params)
    redirect_to recipe_path(@recipe)
  end
 
  private
    def ingredient_params
      params.require(:ingredient).permit(:ingredient, :amount, :unit)
    end
end
