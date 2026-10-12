import { expect } from '@esm-bundle/chai';
import { getActionablePopups, getPotentialPopups } from '../../lib/heuristics';

const BANNER = `
    <p>We use cookies.</p>
    <button>Reject all</button>
    <button>Accept all</button>
`;

function attachShadow(host: HTMLElement, html: string): ShadowRoot {
    const root = host.attachShadow({ mode: 'open' });
    root.innerHTML = html;
    return root;
}

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

    describe('shadow DOM', () => {
        it('finds a positioned popup inside an open shadow root', () => {
            container.innerHTML = '<div id="host"></div>';
            attachShadow(container.querySelector('#host')!, `<div id="banner" style="position: fixed; bottom: 0;">${BANNER}</div>`);

            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.text).to.contain('We use cookies.');
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('reads text and buttons from the shadow root of a positioned host', () => {
            container.innerHTML = '<div id="host" style="position: fixed; bottom: 0;"></div>';
            attachShadow(container.querySelector('#host')!, `<style>.banner { color: red; }</style><div class="banner">${BANNER}</div>`);

            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'host');
            expect(popup).to.exist;
            expect(popup!.text.match(/We use cookies/g)).to.have.length(1);
            expect(popup!.text).not.to.contain('color: red');
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('does not read hidden shadow content of a positioned host', () => {
            container.innerHTML = '<div id="host" style="position: fixed; bottom: 0;"></div>';
            attachShadow(container.querySelector('#host')!, `<div>${BANNER}</div><div style="display: none">Hidden settings panel</div>`);

            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'host');
            expect(popup).to.exist;
            expect(popup!.text).not.to.contain('Hidden settings panel');
        });

        it('finds a popup in nested shadow roots', () => {
            container.innerHTML = '<div id="outer-host"></div>';
            const outer = attachShadow(container.querySelector('#outer-host')!, '<div><div id="inner-host"></div></div>');
            attachShadow(outer.querySelector('#inner-host')!, `<div id="banner" style="position: fixed; bottom: 0;">${BANNER}</div>`);

            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.buttons).to.have.length(2);
        });

        it('prefers a positioned element inside the shadow root over its positioned host', () => {
            container.innerHTML = '<div id="host" style="position: fixed; bottom: 0;"></div>';
            attachShadow(container.querySelector('#host')!, `<div id="banner" style="position: fixed; bottom: 0;">${BANNER}</div>`);

            const ids = getPotentialPopups(1000).map((p) => p.element.id);
            expect(ids).to.include('banner');
            expect(ids).not.to.include('host');
        });

        it('finds buttons in a shadow root nested inside the popup', () => {
            container.innerHTML =
                '<div id="popup" style="position: fixed; bottom: 0;"><p>We use cookies.</p><div id="buttons-host"></div></div>';
            attachShadow(container.querySelector('#buttons-host')!, '<button>Reject all</button><button>Accept all</button>');

            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'popup');
            expect(popup).to.exist;
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('makes a shadow DOM popup actionable', () => {
            container.innerHTML = '<div id="host"></div>';
            attachShadow(container.querySelector('#host')!, `<div id="banner" style="position: fixed; bottom: 0;">${BANNER}</div>`);

            const popups = getActionablePopups('reject', 1000);
            const popup = popups.find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.regexClassification).to.equal('reject');
        });
    });

    describe('visibility', () => {
        const hiddenCases: Record<string, string> = {
            'an ancestor with opacity 0': `<div style="opacity: 0"><div id="panel" style="position: fixed; bottom: 0;">${BANNER}</div></div>`,
            'an ancestor with visibility hidden': `<div style="visibility: hidden"><div id="panel" style="position: fixed; bottom: 0;">${BANNER}</div></div>`,
            'a position outside the viewport': `<div id="panel" style="position: fixed; top: -2000px;">${BANNER}</div>`,
            'zero size': `<div id="panel" style="position: fixed; bottom: 0; width: 0; height: 0; overflow: hidden;">${BANNER}</div>`,
        };
        for (const [name, html] of Object.entries(hiddenCases)) {
            it(`ignores a positioned panel hidden by ${name}`, () => {
                container.innerHTML = html;
                const ids = getPotentialPopups(1000).map((p) => p.element.id);
                expect(ids).not.to.include('panel');
            });
        }

        it('ignores a dialog-like element hidden by an ancestor with opacity 0', () => {
            container.innerHTML = `<div style="opacity: 0"><div id="panel" role="dialog">${BANNER}</div></div>`;
            const ids = getPotentialPopups(1000).map((p) => p.element.id);
            expect(ids).not.to.include('panel');
        });

        it('ignores a hidden panel inside a shadow root', () => {
            container.innerHTML = '<div id="host" style="opacity: 0"></div>';
            attachShadow(container.querySelector('#host')!, `<div id="panel" style="position: fixed; bottom: 0;">${BANNER}</div>`);
            const ids = getPotentialPopups(1000).map((p) => p.element.id);
            expect(ids).not.to.include('panel');
        });
    });
});
