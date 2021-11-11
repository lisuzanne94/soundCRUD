Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      resources :tracks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
