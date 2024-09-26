const sendContentMessage = (message) => {
  return chrome.runtime.sendMessage(message)
}

export default sendContentMessage
