class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  # def current_user
  #   @current_user ||= User.find(session[:user_id])
  # end

  private

  def record_not_found(not_found)
    render json: {error: "#{not_found.model} not found"}, status: :not_found
  end

  def record_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
