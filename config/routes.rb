Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  scope 'api' do
    mount_devise_token_auth_for 'User', at: 'auth'

    get 'lookups/:model' => 'lookups#show'

    resources :users do
      post 'send_confirmation_instructions', on: :collection
      member do
        post 'lock'
        post 'unlock'
        post 'reset_password'
        post 'update_user'
        post 'delete_user'
        post 'bulk_upload'
      end
    end
    resources :roles
    resources :committees
    resources :pupil_registers
    resources :pupil_schools
    resources :pupil_attendances
    resources :pupils
    resources :pupil_groups
    resources :event_schedules
    get 'upcoming_events' => 'event_schedules#upcoming_events'
    resources :event_types
    resources :group_members
    resources :group_leaders
    resources :group_positions
    resources :groups
    resources :members
    resources :spiritual_gifts
    resources :interest_areas
    resources :church_offices
    resources :spoken_languages

    # Reports
    get 'reports/:action'  => 'reports#:action', :defaults => {
      :format => :html
    }, :constraints => {
      :format => /(html|csv|pdf)/
    }
    
    # Dashboard
    get 'dashboard/:action'  => 'dashboard#:action'
  end

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
