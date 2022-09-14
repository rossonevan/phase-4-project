class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :time, :price, :image
  has_many :tickets
  
end
