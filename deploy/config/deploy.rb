lock '3.6.1'

set :application, 'get-native.com'
set :repo_url, 'git@github.com:hank-ehly/get-native.com.git'
set :deploy_to, "/var/www/#{fetch(:application)}"
set :scm, :git
set :keep_releases, 5

after 'deploy:updated', 'deploy:npm:install'
after 'deploy:updated', 'deploy:npm:build'
after 'deploy:updated', 'deploy:pm2:reload'
