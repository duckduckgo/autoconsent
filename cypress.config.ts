import { defineConfig } from "cypress";
import { WebSocketServer } from 'ws';

let wss: WebSocketServer

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        // https://docs.cypress.io/api/plugins/browser-launch-api
        // supply the absolute path to an unpacked extension's folder
        // NOTE: extensions cannot be loaded in headless Chrome

        const pathname = config.projectRoot + '/dist/addon-mv3-test'  // here, we would be adding a different path for firefox depending on the browser selected

        launchOptions.extensions.push(pathname)

        return launchOptions
      })
      on('after:browser:launch', () => {
        if (wss !== undefined) {  // may be a browser restart
          wss.close()
        }

        // this would probably be better placed somewhere else, not sure what "the cypress way" would be here
        // e.g. tasks are not the way to go - https://docs.cypress.io/api/commands/task#Tasks-that-do-not-end-are-not-supported
        // this seemed easiest for now, it does the job
        wss = new WebSocketServer({ port: 8080 });

        wss.on('connection', (ws) => {
          ws.on('error', console.log)

          ws.on('message', (data, isBinary) => {
            wss.clients.forEach((client) => {
              if (client !== ws ) {
                if (client.readyState === 1) { // 1 = open
                  client.send(data, { binary: isBinary });
                } else {
                  // we might want to implement some "buffering" here and then send all the buffered events at once when client is ready
                }
              }
            });
          });
        })
      })
    },
    specPattern: 'tests-cypress/**/*.spec.ts',
  },
});
