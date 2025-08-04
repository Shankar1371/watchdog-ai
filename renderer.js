const fs = require('fs')
const path = require('path')

function saveKey() {
  const key = document.getElementById('apikey-input').value
  const configPath = path.join(__dirname, 'config', 'apiKey.json')

  fs.writeFileSync(configPath, JSON.stringify({ openai_api_key: key }))
  document.getElementById('overlay').innerText = '✅ API Key Saved!'
}
