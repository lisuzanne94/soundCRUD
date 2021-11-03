class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find_by(id: params[:id])
        render :show
    end

    def create
        @track = Track.new(track_params)
        @track.uploader_id = current_user.id

        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        @track = Track.find_by(id: params[:id])

        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find_by(id: params[:id])
        @track.destroy
        render json: {}
    end

    private

    def track_params
        params.require(:track).permit(:title, :uploader_id, :cover_image)
    end
end