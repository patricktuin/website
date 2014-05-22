class WeddingController < ApplicationController
	def index
	end

	def show
		@guests = Guest.all
		@guests.each do |x|
			name = x.name
			attend = x.attend
		end
	end

	def change_attend
		
	end

	def edit
		@guest = Guest.find(params[:id])
		flash[:notice] = 'pollo' 
	end


end
