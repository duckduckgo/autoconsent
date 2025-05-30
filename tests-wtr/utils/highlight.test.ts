import { expect } from '@esm-bundle/chai';
import { highlightNode, unhighlightNode } from '../../lib/utils.js'; // Assuming utils.ts or TS can resolve .js

declare global {
    interface HTMLElement {
        __oldStyles?: string;
    }
}

describe('Node highlighting', () => {
    let testElement: HTMLElement;
    let styleTag: HTMLStyleElement | null;

    beforeEach(() => {
        // Create a new element for each test
        testElement = document.createElement('div');
        document.body.appendChild(testElement);
        // Remove the style tag if it exists from a previous test
        styleTag = document.getElementById('autoconsent-debug-styles') as HTMLStyleElement | null;
        if (styleTag) {
            styleTag.remove();
        }
    });

    afterEach(() => {
        // Clean up the element and style tag after each test
        if (testElement.parentNode) {
            testElement.parentNode.removeChild(testElement);
        }
        styleTag = document.getElementById('autoconsent-debug-styles') as HTMLStyleElement | null;
        if (styleTag) {
            styleTag.remove();
        }
    });

    describe('highlightNode', () => {
        it('should apply highlight styles and add keyframes style tag', () => {
            const originalCssText = testElement.style.cssText;
            highlightNode(testElement);

            // Check that style was applied (is different from original) and a style attribute exists
            expect(testElement.style.cssText).to.not.equal(originalCssText);
            expect(testElement.hasAttribute('style')).to.be.true;

            styleTag = document.getElementById('autoconsent-debug-styles') as HTMLStyleElement;
            expect(styleTag).to.not.be.null;
            if (styleTag) {
                // type guard
                expect(styleTag.textContent).to.contain('@keyframes pulsate');
            }
        });

        it('should store original inline styles if present', () => {
            testElement.style.color = 'blue';
            testElement.style.fontSize = '16px';
            const originalCssText = testElement.style.cssText;

            highlightNode(testElement);

            expect(testElement.__oldStyles).to.equal(originalCssText);
            // Check that current styles are different from original
            expect(testElement.style.cssText).to.not.equal(originalCssText);
        });

        it('should not store original styles if no inline styles are present', () => {
            highlightNode(testElement);
            expect(testElement.__oldStyles).to.be.undefined;
        });

        it('should do nothing if node has no style property (e.g., not an HTMLElement)', () => {
            const notAnElement = {} as any; // Using any here to test non-HTMLElement behavior
            highlightNode(notAnElement);
            // No error should be thrown, and no properties should be added.
            expect(notAnElement.style).to.be.undefined;
            expect(notAnElement.__oldStyles).to.be.undefined;

            styleTag = document.getElementById('autoconsent-debug-styles') as HTMLStyleElement | null;
            expect(styleTag).to.be.null; // Style tag should not be added if node.style is undefined
        });

        it('should handle elements without a pre-existing style attribute', () => {
            highlightNode(testElement);
            expect(testElement.hasAttribute('style')).to.be.true;
            expect(testElement.__oldStyles).to.be.undefined; // No old styles to store
        });
    });

    describe('unhighlightNode', () => {
        it('should remove highlight styles and restore original styles if they existed', () => {
            testElement.style.color = 'blue';
            const originalCssText = testElement.style.cssText;
            highlightNode(testElement);
            expect(testElement.__oldStyles).to.equal(originalCssText);
            const highlightedCssText = testElement.style.cssText;

            unhighlightNode(testElement);

            expect(testElement.style.cssText).to.equal(originalCssText);
            expect(testElement.style.cssText).to.not.equal(highlightedCssText);
            expect(testElement.__oldStyles).to.be.undefined;
        });

        it('should remove style attribute if no original styles were present', () => {
            highlightNode(testElement);
            expect(testElement.hasAttribute('style')).to.be.true;
            expect(testElement.__oldStyles).to.be.undefined;

            unhighlightNode(testElement);

            expect(testElement.hasAttribute('style')).to.be.false;
        });

        it('should do nothing if node has no style property', () => {
            const notAnElement = {} as any; // Using any here to test non-HTMLElement behavior
            highlightNode(notAnElement);
            unhighlightNode(notAnElement);
            // No error should be thrown, and no properties should be changed or added.
            expect(notAnElement.style).to.be.undefined;
            expect(notAnElement.__oldStyles).to.be.undefined;
        });

        it('should do nothing if node has no style attribute (e.g., highlight was not called)', () => {
            const initialAttributes = Array.from(testElement.attributes).map((attr) => attr.name);
            unhighlightNode(testElement);
            const finalAttributes = Array.from(testElement.attributes).map((attr) => attr.name);
            expect(finalAttributes).to.deep.equal(initialAttributes);
        });

        it('should do nothing if node.style exists but no style attribute is set', () => {
            Object.defineProperty(testElement, 'hasAttribute', { value: () => false, configurable: true });
            const initialStyleCssText = testElement.style.cssText; // Should be empty

            unhighlightNode(testElement);

            expect(testElement.style.cssText).to.equal(initialStyleCssText);
            expect(testElement.__oldStyles).to.be.undefined;
        });
    });
});
