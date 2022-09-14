class EventsController < ApplicationController

    def index 
        events = Event.all
        render json: events, status: :ok
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private

    def event_params
        params.permit(:name, :image, :price, :date, :location, :time)
    end

end
