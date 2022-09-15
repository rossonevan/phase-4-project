class TicketsController < ApplicationController


    def show
        ticket = find_ticket
        render json: ticket, status: :ok
    end

    def create
        ticket = Ticket.create!(ticket_params)
        current_user.tickets << ticket
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
