import { expect } from '@esm-bundle/chai';
import '../../lib/heuristic-dom-bundle';
import type { getButtonData, getPotentialPopups } from '../../lib/heuristics';

const { autoconsentHeuristics } = globalThis as unknown as {
    autoconsentHeuristics: { getPotentialPopups: typeof getPotentialPopups; getButtonData: typeof getButtonData };
};

describe('heuristic-dom-bundle', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('exposes popup and button discovery on a global', () => {
        container.innerHTML = `
            <div id="popup" style="position: fixed; bottom: 0;">
                <p>We use cookies.</p>
                <button>Reject all</button>
                <button>Accept all</button>
            </div>
        `;
        const popups = autoconsentHeuristics.getPotentialPopups(1000);
        const popup = popups.find((p) => p.element.id === 'popup');
        expect(popup).to.exist;
        expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        expect(autoconsentHeuristics.getButtonData(container).length).to.equal(2);
    });
});
