class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :time, :price, :image
end
