import { expect } from '@esm-bundle/chai';
import {DomActions} from "../lib/dom-actions";

function instantiateDomActions() {
  // @ts-expect-error we don't need to add a full AutoConsent instance, DomActions only needs config.logs from it
  return new DomActions({config: {logs: {rulesteps: false, lifecycle: false, evals: false, errors: false, messages: false}}})
}

function getEventCounterFromDataset(eventType: string, querySelector: string, doc: Document | ShadowRoot = document) {
  return parseInt(doc.querySelector<HTMLElement>(querySelector).dataset[`event:${eventType}`] ?? '0', 10)
}

function getClicksCount(querySelector: string, doc: Document | ShadowRoot = document) {
  return getEventCounterFromDataset('click', querySelector, doc)
}

function addListenerThatIncrementsInDataset(el: HTMLElement, eventType: string) {
  const listener = () => {
    const current = parseInt(el.dataset[`event:${eventType}`] ?? '0', 10)

    el.dataset[`event:${eventType}`] = (current + 1).toString()
  }
  el.addEventListener(eventType, listener)

  return listener
}

// must be run from dom-actions.test.html
describe('click', () => {
  const elementsWithListeners: {element: HTMLElement, eventType: string, listener: () => void}[] = []

  beforeEach(() => {
    document.querySelectorAll('button').forEach((el) => {
      const eventType = 'click'

      const listener = addListenerThatIncrementsInDataset(el, eventType)
      elementsWithListeners.push({element: el, eventType, listener})
    })
  })

  afterEach(() => {
    for (const {element, eventType, listener} of elementsWithListeners) {
      element.removeEventListener(eventType, listener)

      delete element.dataset[`event:${eventType}`]
    }
  })

  it('clicks on a button', () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const clickedSuccessfully = domActions.click('#test');

    // Then
    expect(clickedSuccessfully).true
    expect(getClicksCount('#first > button')).to.equal(1)
  });

  it('clicks all upon multiple matches when all=true', () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const clickedSuccessfully = domActions.click('button', true);

    // Then
    expect(clickedSuccessfully).true
    expect(getClicksCount('#first > button')).to.equal(1)
    expect(getClicksCount('#second > button')).to.equal(1)
  })

  it('clicks only first one upon multiple matches when all=false', () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const clickedSuccessfully = domActions.click('button');

    // Then
    expect(clickedSuccessfully).true
    expect(getClicksCount('#first > button')).to.equal(1)
    expect(getClicksCount('#second > button')).to.equal(0)
  })

  it('clicks by chained selector', () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const clickedSuccessfully = domActions.click(['#second', 'button'])

    // Then
    expect(clickedSuccessfully).true;
    expect(getClicksCount('#first > button')).to.equal(0)
    expect(getClicksCount('#second > button')).to.equal(1)
  })

  it('clicks by xpath selector', () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const clickedSuccessfully = domActions.click(['xpath///*[@id="second"]/button'])

    // Then
    expect(clickedSuccessfully).true;
    expect(getClicksCount('#first > button')).to.equal(0)
    expect(getClicksCount('#second > button')).to.equal(1)
  })

  it('clicks an open shadow dom element', () => {
    // Given
    const domActions = instantiateDomActions();

    const shadowRoot = (() => {
      const shadowDiv = document.createElement('div')
      shadowDiv.id = 'shadow'
      document.body.appendChild(shadowDiv)
      const shadow = shadowDiv.attachShadow({ mode: 'open' })
      const shadowButton = document.createElement('button')
      shadowButton.innerText = '0'
      shadow.appendChild(shadowButton)
      addListenerThatIncrementsInDataset(shadowButton, 'click')
      return shadow
    })()

    // When
    const clickedSuccessfully = domActions.click(['#shadow', 'button'])

    // Then
    expect(clickedSuccessfully).true
    expect(getClicksCount('#first > button')).to.equal(0)
    expect(getClicksCount('#second > button')).to.equal(0)
    expect(getClicksCount('button', shadowRoot)).to.equal(1)
  })
});
