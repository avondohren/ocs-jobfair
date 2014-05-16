OcsCheckin::Application.routes.draw do
  root to: 'checkins#new'
  resources :checkins
end
