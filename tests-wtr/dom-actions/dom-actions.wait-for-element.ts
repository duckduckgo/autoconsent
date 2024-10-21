import {expect} from '@esm-bundle/chai';
import {instantiateDomActions} from "./utils";

// must be run from dom-actions.wait-for-element.html
describe('waitForElement', () => {
  it('should resolve to true immediately if element already present', async () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const result = await domActions.waitForElement('#already-present');

    // Then
    expect(result).to.be.true
  })
  it('should resolve to true once element appears', async () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const resultPromise = domActions.waitForElement('#deferred', 1000);

    setTimeout(() => {
      const deferredElement = document.createElement('p')
      deferredElement.id = 'deferred'
      deferredElement.innerText = 'Deferred element appeared'

      document.getElementById('target-for-delayed-element').appendChild(deferredElement)
    }, 800)

    const result = await resultPromise

    // Then
    expect(result).to.be.true
  })
  it('should resolve to false if element does not appear until timeout', async () => {
    // Given
    const domActions = instantiateDomActions();

    // When
    const result = await domActions.waitForElement('#not-present', 1000);

    // Then
    expect(result).to.be.false
  })
})
