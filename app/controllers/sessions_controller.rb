class SessionsController < ApplicationController
    
    def index
        session[:]
    end
end
