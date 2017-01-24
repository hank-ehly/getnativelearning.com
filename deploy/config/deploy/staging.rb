set :branch, :develop

server 'stg.get-native.com',
       user: 'get-native',
       roles: %w(web),
       ssh_options: {
               forward_agent: false,
               auth_methods: %w(publickey)
       }
