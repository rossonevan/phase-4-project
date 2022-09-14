class TicketEventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id
  belongs_to :event
end
