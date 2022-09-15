Rails.application.routes.draw do
  resources :events
  resources :users, except: [:index]
  resources :tickets, except: [:index]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: "users#show"
  delete '/deleteUser', to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
