import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from "./utils";

// must be run from dom-actions.element-selector.html
describe('elementSelector', () => {
  describe('querySingleReplySelector', () => {
    const specialCasesThatShouldReturnEmptyArray = ['aria/', 'text/', 'pierce/']

    specialCasesThatShouldReturnEmptyArray.forEach((selector) => {
      it(`should return empty array if selector starts with "${selector}"`, () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const elements = domActions.querySingleReplySelector(selector + 'something');

        // Then
        expect(elements).to.be.empty
      })
    })
    it('should return elements by xpath if selector starts with "xpath/"', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const elements = domActions.querySingleReplySelector('xpath///button[contains(., \'Accept all\')]');

      // Then
      expect(elements).to.deep.eq([
        document.getElementById('button1'),
        document.getElementById('button3'),
      ])
    })
    it('should return elements by querySelectorAll from shadow root if available', () => {
      // Given
      const domActions = instantiateDomActions();

      const shadowDiv = document.createElement('div')
      document.body.appendChild(shadowDiv)
      const shadow = shadowDiv.attachShadow({mode: 'open'})
      const shadowButton1 = document.createElement('button')
      shadow.appendChild(shadowButton1)
      const shadowButton2 = document.createElement('button')
      shadow.appendChild(shadowButton2)

      // When
      const elements = domActions.querySingleReplySelector('button', shadowDiv)

      // Then
      expect(elements).to.deep.eq([
        shadowButton1,
        shadowButton2,
      ])
    })
    it('should return elements by querySelectorAll', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const elements = domActions.querySingleReplySelector('button');

      // Then
      expect(elements).to.deep.eq([
        document.getElementById('button1'),
        document.getElementById('button2'),
        document.getElementById('button3'),
      ])
    })
  })
  describe('querySelectorChain', () => {
    it('should return empty array if any selector does not produce a match', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const elements = domActions.querySelectorChain(['.outer', '.outer', '.inner'])

      // Then
      expect(elements).to.deep.eq([])
    })
    it('should return results if all selectors produce a match in one another', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const elements = domActions.querySelectorChain(['.outer', '.inner', 'p'])

      // Then
      expect(elements).to.deep.eq([
        document.getElementById('innermost')
      ])
    })
  })
})
