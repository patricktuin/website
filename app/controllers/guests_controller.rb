class GuestsController < ApplicationController

	def update
		@guest = Guest.find(params[:id])
		@guest.update(params[:guest].permit(:attend))
		#@guest.update
		redirect_to wedding_path
	end

	def nap
		@guest = Guest.find(params[:id])
		@guest.update_attribute(:name, 'pollo')
	end

end
