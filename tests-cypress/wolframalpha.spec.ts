import {assertArrayContainsObject} from "./utils";

const cmpName = 'wolframalpha'
const url = 'https://www.wolframalpha.com'

describe('wolframalpha-com', () => {
  it('passes', () => {
    cy.on('uncaught:exception', ((error, runnable) => {
      // This is necessary not to stop the test upon failures in the 3rd party website code.
      // See https://docs.cypress.io/api/cypress-api/catalog-of-events#To-turn-off-all-uncaught-exception-handling
      // We might want to experiment with some better handling, like seeing if cy.origin() can distinguish our extension from the 3rd party website

      return false
    }))

    // setup messaging with the extension through websockets
    const messagesFromExtension = []

    const ws = new WebSocket('ws://localhost:8080')

    // the .wrap(null) is a recommended way to wait for promises - https://docs.cypress.io/api/utilities/promise#Waiting-for-Promises
    cy.wrap(null, {log: false}).then(() => new Cypress.Promise(resolve => {
      ws.addEventListener('open', () => {
        ws.addEventListener('message', (m) => {
          messagesFromExtension.push(JSON.parse(m.data))
        })
        resolve()
      })
    }))

    // perform the actual test
    cy.visit(url)

    cy.wrap(messagesFromExtension).should(assertArrayContainsObject({type: 'cmpDetected', cmp: cmpName}))
    cy.wrap(messagesFromExtension).should(assertArrayContainsObject({type: 'popupFound', cmp: cmpName}))
    cy.wrap(messagesFromExtension).should(assertArrayContainsObject({ type: "optOutResult", result: true }))
    cy.wrap(messagesFromExtension).should(assertArrayContainsObject({ type: "autoconsentDone" }))
  })
})
