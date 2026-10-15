import { expect } from '@esm-bundle/chai';
import { getActionablePopups, getButtonData, getFramePopupElement, getPotentialPopups } from '../../lib/heuristics';
import { getHidingStyle } from '../../lib/utils';

const BANNER = `
    <p>We use cookies.</p>
    <button>Reject all</button>
    <button>Accept all</button>
`;

function fixedBanner(id: string): string {
    return `<div id="${id}" style="position: fixed; bottom: 0;">${BANNER}</div>`;
}

// hides the selector the way prehide does
function addPrehideStyle(selector: string): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = `${selector} { ${getHidingStyle('opacity')} }`;
    document.head.appendChild(style);
    return style;
}

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

    // adds an element with an open shadow root to the container
    function shadowHost(hostStyle: string, html: string): ShadowRoot {
        container.innerHTML = `<div id="host" style="${hostStyle}"></div>`;
        return attachShadow(container.querySelector('#host')!, html);
    }

    function popupIds(): string[] {
        return getPotentialPopups(1000).map((p) => p.element.id);
    }

    function findPopup(id: string) {
        return getPotentialPopups(1000).find((p) => p.element.id === id);
    }

    it('returns positioned popups with their buttons', () => {
        container.innerHTML = fixedBanner('popup');
        const popup = findPopup('popup');
        expect(popup).to.exist;
        expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
    });

    describe('shadow DOM', () => {
        it('finds a positioned popup inside an open shadow root', () => {
            shadowHost('', fixedBanner('banner'));

            const popup = findPopup('banner');
            expect(popup).to.exist;
            expect(popup!.text).to.contain('We use cookies.');
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('reads text and buttons from the shadow root of a positioned host', () => {
            shadowHost('position: fixed; bottom: 0;', `<style>.banner { color: red; }</style><div class="banner">${BANNER}</div>`);

            const popup = findPopup('host');
            expect(popup).to.exist;
            expect(popup!.text.match(/We use cookies/g)).to.have.length(1);
            expect(popup!.text).not.to.contain('color: red');
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('does not read hidden shadow content of a positioned host', () => {
            shadowHost('position: fixed; bottom: 0;', `<div>${BANNER}</div><div style="display: none">Hidden settings panel</div>`);

            const popup = findPopup('host');
            expect(popup).to.exist;
            expect(popup!.text).not.to.contain('Hidden settings panel');
        });

        it('finds a popup in nested shadow roots', () => {
            const outer = shadowHost('', '<div><div id="inner-host"></div></div>');
            attachShadow(outer.querySelector('#inner-host')!, fixedBanner('banner'));

            const popup = findPopup('banner');
            expect(popup).to.exist;
            expect(popup!.buttons).to.have.length(2);
        });

        it('prefers a positioned element inside the shadow root over its positioned host', () => {
            shadowHost('position: fixed; bottom: 0;', fixedBanner('banner'));

            const ids = popupIds();
            expect(ids).to.include('banner');
            expect(ids).not.to.include('host');
        });

        it('finds buttons in a shadow root nested inside the popup', () => {
            container.innerHTML =
                '<div id="popup" style="position: fixed; bottom: 0;"><p>We use cookies.</p><div id="buttons-host"></div></div>';
            attachShadow(container.querySelector('#buttons-host')!, '<button>Reject all</button><button>Accept all</button>');

            const popup = findPopup('popup');
            expect(popup).to.exist;
            expect(popup!.buttons.map((b) => b.text).sort()).to.deep.equal(['Accept all', 'Reject all']);
        });

        it('finds buttons in shadow roots when called without known shadow hosts', () => {
            const root = shadowHost('', '<div id="inner-host"></div>');
            attachShadow(root.querySelector('#inner-host')!, '<button>Reject all</button>');
            expect(getButtonData(container).map((b) => b.text)).to.deep.equal(['Reject all']);
        });

        it('makes a shadow DOM popup actionable', () => {
            shadowHost('', fixedBanner('banner'));

            const popups = getActionablePopups('reject', 1000);
            const popup = popups.find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.regexClassification).to.equal('reject');
        });
    });

    describe('visibility', () => {
        const hiddenCases: Record<string, string> = {
            'an ancestor with display none': `<div style="display: none">${fixedBanner('panel')}</div>`,
            'an ancestor with visibility hidden': `<div style="visibility: hidden">${fixedBanner('panel')}</div>`,
            'an ancestor with visibility hidden (dialog-like)': `<div style="visibility: hidden"><div id="panel" role="dialog">${BANNER}</div></div>`,
            'a position outside the viewport': `<div id="panel" style="position: fixed; top: -2000px;">${BANNER}</div>`,
            'zero size': `<div id="panel" style="position: fixed; bottom: 0; width: 0; height: 0; overflow: hidden;">${BANNER}</div>`,
            'a zero-size wrapper whose content is outside the viewport': `<div id="panel" style="position: fixed; top: 0; height: 0;"><div style="position: relative; top: -2000px;">${BANNER}</div></div>`,
        };
        for (const [name, html] of Object.entries(hiddenCases)) {
            it(`ignores a positioned panel hidden by ${name}`, () => {
                container.innerHTML = html;
                expect(popupIds()).not.to.include('panel');
            });
        }

        it('ignores a hidden panel inside a shadow root', () => {
            shadowHost('visibility: hidden', fixedBanner('panel'));
            expect(popupIds()).not.to.include('panel');
        });

        it('finds a popup hidden with opacity 0, as prehide does', () => {
            const style = addPrehideStyle('#panel');
            try {
                container.innerHTML = fixedBanner('panel');
                expect(popupIds()).to.include('panel');
            } finally {
                style.remove();
            }
        });

        it('finds a popup in a zero-size positioned wrapper whose content is on screen', () => {
            container.innerHTML = `<div id="panel" style="position: fixed; bottom: 0; left: 0; right: 0; height: 0;"><div style="position: absolute; bottom: 0;">${BANNER}</div></div>`;
            expect(popupIds()).to.include('panel');
        });
    });

    describe('popup fragments', () => {
        it('expands a sticky button bar to the banner that contains it', () => {
            container.innerHTML = `
                <div id="banner" style="position: fixed; bottom: 0;">
                    <p>We use cookies.</p>
                    <div id="button-bar" style="position: sticky; bottom: 0;">
                        <button>Reject all</button>
                        <button>Accept all</button>
                    </div>
                </div>
            `;
            const popups = getPotentialPopups(1000);
            const ids = popups.map((p) => p.element.id);
            expect(ids).to.include('banner');
            expect(ids).not.to.include('button-bar');
            const banner = popups.find((p) => p.element.id === 'banner')!;
            expect(banner.text).to.contain('We use cookies.');
            expect(banner.buttons).to.have.length(2);
        });

        it('expands a fixed button bar to an ancestor that is not positioned', () => {
            container.innerHTML = `
                <div id="banner">
                    <p>We use cookies.</p>
                    <div id="button-bar" style="position: fixed; bottom: 0;">
                        <button>Reject all</button>
                        <button>Accept all</button>
                    </div>
                </div>
            `;
            const ids = popupIds();
            expect(ids).to.include('banner');
            expect(ids).not.to.include('button-bar');
        });

        it('expands past text whose only buttons are policy links', () => {
            container.innerHTML = `
                <div id="banner">
                    <div id="banner-text">
                        <h2 style="position: sticky; top: 0;">Cookie settings</h2>
                        <p>We use cookies. Read our <a href="#">Privacy Policy</a>.</p>
                    </div>
                    <button>Reject all</button>
                    <button>Accept all</button>
                </div>
            `;
            const ids = popupIds();
            expect(ids).to.include('banner');
            expect(ids).not.to.include('banner-text');
        });

        it('expands a sticky heading with no buttons to its dialog', () => {
            container.innerHTML = `
                <div id="dialog" role="dialog" style="position: absolute; top: 0; height: 300px; overflow: auto;">
                    <header id="heading" style="position: sticky; top: 0;">Cookie settings</header>
                    <p>We use cookies.</p>
                    <button>Reject all</button>
                    <button>Accept all</button>
                </div>
            `;
            const ids = popupIds();
            expect(ids).to.include('dialog');
            expect(ids).not.to.include('heading');
        });

        it('returns one popup when several fragments expand to the same banner', () => {
            container.innerHTML = `
                <div id="banner">
                    <p>We use cookies.</p>
                    <div style="position: fixed; top: 0;"><button>Close</button></div>
                    <div style="position: fixed; bottom: 0;"><button>Reject all</button><button>Accept all</button></div>
                </div>
            `;
            const popups = getPotentialPopups(1000).filter((p) => container.contains(p.element));
            expect(popups.map((p) => p.element.id)).to.deep.equal(['banner']);
        });

        it('keeps a fragment when no ancestor looks like a consent popup', () => {
            container.innerHTML = `
                <div id="wrapper">
                    <p>Sign up for our newsletter.</p>
                    <div id="bar" style="position: fixed; bottom: 0;"><button>Subscribe</button></div>
                </div>
            `;
            const ids = popupIds();
            expect(ids).to.include('bar');
            expect(ids).not.to.include('wrapper');
        });

        it('does not expand into a container taller than the viewport', () => {
            container.innerHTML = `
                <div id="page" style="height: 3000px;">
                    <nav id="nav" style="position: fixed; top: 0;"><a href="#">Home</a><a href="#">About</a></nav>
                    <footer>We use cookies to improve this site.</footer>
                </div>
            `;
            const ids = popupIds();
            expect(ids).to.include('nav');
            expect(ids).not.to.include('page');
        });

        it('expands a fragment inside a shadow root', () => {
            shadowHost(
                '',
                `<div id="banner"><p>We use cookies.</p><div id="button-bar" style="position: fixed; bottom: 0;"><button>Reject all</button><button>Accept all</button></div></div>`,
            );
            const ids = popupIds();
            expect(ids).to.include('banner');
            expect(ids).not.to.include('button-bar');
        });

        it('makes an expanded popup actionable', () => {
            container.innerHTML = `
                <div id="banner" style="position: fixed; bottom: 0;">
                    <p>We use cookies.</p>
                    <div style="position: sticky; bottom: 0;"><button>Reject all</button><button>Accept all</button></div>
                </div>
            `;
            const popup = getActionablePopups('reject', 1000).find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.regexClassification).to.equal('reject');
        });

        it('expands a button bar into an age gate so that the gate is excluded', () => {
            container.innerHTML = `
                <div role="dialog" style="position: absolute; top: 0;">
                    <h2>Age verification</h2>
                    <p>This website contains adult material and is only accessible to persons over 18 years of age. This site uses cookies.</p>
                    <div style="position: sticky; bottom: 0;"><button>Accept all</button></div>
                </div>
            `;
            const popups = getActionablePopups('tier2', 1000).filter((p) => container.contains(p.element));
            expect(popups).to.have.length(0);
        });
    });
});

describe('getFramePopupElement', () => {
    let iframe: HTMLIFrameElement;

    async function loadFrame(html: string, style = 'width: 400px; height: 300px;') {
        iframe = document.createElement('iframe');
        iframe.setAttribute('style', style);
        const loaded = new Promise((resolve) => iframe.addEventListener('load', resolve, { once: true }));
        iframe.srcdoc = html;
        document.body.appendChild(iframe);
        await loaded;
        return iframe.contentDocument!;
    }

    afterEach(() => {
        iframe?.remove();
    });

    it('returns the body of a frame with text', async () => {
        const doc = await loadFrame(`<body>${BANNER}</body>`);
        expect(getFramePopupElement(doc)).to.equal(doc.body);
    });

    it('returns the body when all frame content is positioned', async () => {
        const doc = await loadFrame(`<body><div style="position: fixed; bottom: 0;">${BANNER}</div></body>`);
        expect(doc.body.getBoundingClientRect().height).to.equal(0);
        expect(getFramePopupElement(doc)).to.equal(doc.body);
    });

    it('ignores a frame without text', async () => {
        const doc = await loadFrame('<body><div></div></body>');
        expect(getFramePopupElement(doc)).to.be.null;
    });

    it('ignores a frame with a hidden body', async () => {
        const doc = await loadFrame(`<body style="visibility: hidden">${BANNER}</body>`);
        expect(getFramePopupElement(doc)).to.be.null;
    });

    it('ignores a frame that is not rendered', async () => {
        const doc = await loadFrame(`<body>${BANNER}</body>`, 'display: none;');
        expect(getFramePopupElement(doc)).to.be.null;
    });
});
