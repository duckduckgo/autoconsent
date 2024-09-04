import {MessageSender} from "../lib/types";

const ws = new WebSocket('ws://localhost:8080')

const sendContentMessage: MessageSender = (message) => {
  const wsMessage = JSON.stringify(message)

  if (ws.readyState === WebSocket.CONNECTING) {
    ws.addEventListener('open', () => {
      ws.send(wsMessage);
    })
  } else {
    ws.send(wsMessage);
  }

  return chrome.runtime.sendMessage(message)
}

export default sendContentMessage
