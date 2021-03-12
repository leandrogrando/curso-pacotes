import Echo from 'laravel-echo'

// Laravel echo (Websocket)
window.Pusher = require('pusher-js')
window.Echo = new Echo({
  broadcaster: 'pusher',
  encrypted: false,
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  wsHost: process.env.MIX_PUSHER_APP_HOST,
  wsPort: process.env.MIX_PUSHER_APP_PORT,
  wssPort: process.env.MIX_PUSHER_APP_PORT,
  forceTLS: process.env.MIX_PUSHER_FORCE_TLS === 'true',
  disableStats: true,
  enabledTransports: ['ws', 'wss']
})
