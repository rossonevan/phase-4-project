class TicketsController < ApplicationController

    def index 
        tickets = Ticket.all
        render json: tickets, status: :ok
    end

    def show
        ticket = find_ticket
        render json: ticket, status: :ok
    end

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    def destroy
        ticket = find_ticket
        ticket.destroy
        head :no_content
    end

    private

    def ticket_params
        params.permit(:user_id, :event_id)
    end

    def find_ticket
        Ticket.find(params[:id])
    end

end
