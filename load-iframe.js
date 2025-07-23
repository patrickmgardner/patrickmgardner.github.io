;(function () {
  const log = 'collapsed'
  const width = '100%'
  const height = '100vh'
  const site = 'https://patrickmgardner.github.io'
  const parentScript = 'node_modules/@iframe-resizer/parent/index.umd.min.js'
  const license = 'GPLv3'

  // Create the iframe
  const iframe = document.createElement('iframe')
  iframe.src = `${site}`
  iframe.style.width = width
  iframe.style.height = height

  // Prepare options for iframe-resizer
  const options = { license, log, waitForLoad: true }

  // Load iframe-resizer parent script
  const script = document.createElement('script')
  script.src = `${site}/${parentScript}`
  script.async = true
  script.fetchPriority = 'high'
  script.onload = () => iframeResize(options, iframe)
  script.onerror = function () {
    console.error('Failed to load iframe-resizer library.')
  }

  // Insert after this script
  document.currentScript.after(iframe, script)
})()
