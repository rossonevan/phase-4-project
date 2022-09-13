class User < ApplicationRecord

    has_secure_password

    has_many :tickets, dependent: :destroy
    has_many :events, through: :tickets

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

end
