import {expect} from '@esm-bundle/chai';
import {instantiateDomActions} from "./utils";

// must be run from dom-actions.element-visible.html
describe('elementVisible', () => {
  describe('mode: "none"', () => {
    it('should return true if no elements found by selector', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible('#not-found', 'none');

      // Then
      expect(visible).to.be.true
    })
    it('should return false if all elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#all-visible', 'button'], 'none');

      // Then
      expect(visible).to.be.false
    })
    it('should return false if some elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#some-visible', 'button'], 'none');

      // Then
      expect(visible).to.be.false
    })
    it('should return true if no elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#none-visible', 'button'], 'none');

      // Then
      expect(visible).to.be.true
    })
  })
  describe('mode: "any"', () => {
    it('should return false if no elements found by selector', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible('#not-found', 'any');

      // Then
      expect(visible).to.be.false
    })
    it('should return false if no elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#none-visible', 'button'], 'any');

      // Then
      expect(visible).to.be.false
    })
    it('should return true if some elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#some-visible', 'button'], 'any');

      // Then
      expect(visible).to.be.true
    })
    it('should return true if all elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#all-visible', 'button'], 'any');

      // Then
      expect(visible).to.be.true
    })
  })
  describe('mode: "all"', () => {
    it('should return false if no elements found by selector', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible('#not-found', 'all');

      // Then
      expect(visible).to.be.false
    })
    it('should return false if no elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#none-visible', 'button'], 'all');

      // Then
      expect(visible).to.be.false
    })
    it('should return false if some elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#some-visible', 'button'], 'all');

      // Then
      expect(visible).to.be.false
    })
    it('should return true if all elements are visible', () => {
      // Given
      const domActions = instantiateDomActions();

      // When
      const visible = domActions.elementVisible(['#all-visible', 'button'], 'all');

      // Then
      expect(visible).to.be.true
    })
  })
})
