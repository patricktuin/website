json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :recipe_type, :description, :img_url, :preparation
  json.url recipe_url(recipe, format: :json)
end
