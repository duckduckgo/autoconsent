import { expect } from '@esm-bundle/chai';
import { getPotentialPopups } from '../../lib/heuristics';

describe('getPotentialPopups', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('returns positioned popups with their buttons', () => {
        container.innerHTML = `
            <div id="popup" style="position: fixed; bottom: 0;">
                <p>We use cookies.</p>
                <button>Reject all</button>
                <button>Accept all</button>
            </div>
        `;
        const popup = getPotentialPopups(1000).find((p) => p.element.id === 'popup');
        expect(popup).to.exist;
        expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
    });
});
