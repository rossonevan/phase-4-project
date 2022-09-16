class Event < ApplicationRecord
    has_many :tickets, dependent: :destroy
    has_many :users, through: :tickets

    validates :name, presence: true
    validates :location, presence: true
    validates :date, presence: true
    validates :time, presence: true
    validates :price, presence: true
    validates :image, presence: true
end
