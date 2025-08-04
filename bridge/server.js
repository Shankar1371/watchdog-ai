const { spawn } = require('child_process')

const python = spawn('python', ['python/screen_watcher.py'])

python.stdout.on('data', (data) => {
  try {
    const parsed = JSON.parse(data.toString())
    console.log(' OCR Result:', parsed.screen_text.slice(0, 200), '...')
  } catch (err) {
    console.log('Error parsing Python output', err.message)
  }
})
