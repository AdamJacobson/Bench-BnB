Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create]
  end

end
