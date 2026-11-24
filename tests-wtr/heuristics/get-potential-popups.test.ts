import { expect } from '@esm-bundle/chai';
import { getActionablePopups, getButtonData, getFramePopupElement, getPotentialPopups } from '../../lib/heuristics';
import { PopupData } from '../../lib/types';
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

    function popupIds(hitTest = false): string[] {
        return getPotentialPopups(1000, hitTest).map((p) => p.element.id);
    }

    function findPopup(id: string) {
        return getPotentialPopups(1000).find((p) => p.element.id === id);
    }

    function inContainer(popups: PopupData[]): PopupData[] {
        return popups.filter((p) => container.contains(p.element));
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
            const popups = inContainer(getPotentialPopups(1000));
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
            const popups = inContainer(getActionablePopups('tier2', 1000));
            expect(popups).to.have.length(0);
        });
    });
    describe('banners in the normal page flow', () => {
        const IN_FLOW_BANNER = `
            <div id="banner">
                <p>We use cookies to improve your experience. Read our <a href="#">Privacy Policy</a>.</p>
                <button>Reject all</button>
                <button>Accept all</button>
            </div>
        `;

        it('only hit-tests when asked to', () => {
            container.innerHTML = IN_FLOW_BANNER;
            expect(popupIds()).not.to.include('banner');
            expect(inContainer(getActionablePopups('reject', 1000))).to.have.length(0);
        });

        it('finds a banner at the top of the page that is not positioned', () => {
            container.innerHTML = IN_FLOW_BANNER;
            expect(popupIds(true)).to.include('banner');
        });

        it('makes an in-flow banner actionable', () => {
            container.innerHTML = IN_FLOW_BANNER;
            const popup = getActionablePopups('reject', 1000, true).find((p) => p.element.id === 'banner');
            expect(popup).to.exist;
            expect(popup!.regexClassification).to.equal('reject');
        });

        it('ignores an in-flow banner below the fold', () => {
            container.innerHTML = `<div style="height: 3000px"></div>${IN_FLOW_BANNER}`;
            expect(popupIds(true)).not.to.include('banner');
        });

        it('ignores page copy about cookies without consent buttons', () => {
            container.innerHTML =
                '<div id="copy"><p>We use cookies on this site.</p><a href="#">Privacy Policy</a> <a href="#">Contact</a></div>';
            expect(popupIds(true)).not.to.include('copy');
        });

        it('ignores a login form with consent wording', () => {
            container.innerHTML = `
                <form id="login">
                    <input type="email" placeholder="Email">
                    <p>By continuing, you agree to our Terms and acknowledge our Privacy Policy and use of cookies.</p>
                    <button>Continue</button>
                </form>
            `;
            expect(popupIds(true)).not.to.include('login');
        });

        it('does not report a positioned popup twice', () => {
            container.innerHTML = fixedBanner('banner');
            expect(popupIds(true).filter((id) => id === 'banner')).to.have.length(1);
        });

        it('prefers a positioned popup with reject over an in-flow accept-only banner', () => {
            container.innerHTML = `
                <div id="inflow"><p>We use cookies to improve your experience.</p><button>Accept all</button></div>
                <div id="fixed" style="position: fixed; bottom: 0;"><p>We use cookies.</p><button>Reject all</button><button>Accept all</button></div>
            `;
            const popups = inContainer(getActionablePopups('tier2', 1000, true));
            expect(popups.map((p) => [p.element.id, p.regexClassification])).to.deep.equal([
                ['fixed', 'reject'],
                ['inflow', 'tier2'],
            ]);
        });

        it('skips the DOM walk when hit-testing finds a popup with reject', () => {
            // pointer-events: none keeps the fixed popup out of hit-testing, so only the walk could find it
            container.innerHTML = `
                ${IN_FLOW_BANNER}
                <div id="fixed" style="position: fixed; bottom: 0; pointer-events: none;"><p>We use cookies.</p><button>Reject all</button></div>
            `;
            const actionable = inContainer(getActionablePopups('tier2', 1000, true));
            expect(actionable.map((p) => p.element.id)).to.deep.equal(['banner']);
            expect(popupIds(true)).to.include.members(['banner', 'fixed']);
        });

        it('finds an in-flow banner inside a shadow root', () => {
            shadowHost('', IN_FLOW_BANNER);
            expect(popupIds(true)).to.include('banner');
        });

        describe('inside a walk candidate that is not a consent popup', () => {
            // the fixed wrapper is found by the walk, but its age gate text excludes it
            function ageGateWrapper(bannerFirst: boolean): string {
                const banner =
                    '<div id="banner"><p>We use cookies to improve your experience on our website.</p><button>Accept all</button></div>';
                const ageGate = '<p>You must be over 18 years old to enter.</p>';
                return `<div id="wrapper" style="position: fixed; top: 0; left: 0; right: 0;">${bannerFirst ? banner + ageGate : ageGate + banner}</div>`;
            }

            it('keeps a consent popup found by hit-testing next to the walk candidate', () => {
                // the top grid row hits the banner, so hit-testing finds the banner rather than the wrapper
                container.innerHTML = ageGateWrapper(true);
                const popups = inContainer(getPotentialPopups(1000, true));
                expect(popups.map((p) => [p.element.id, p.source])).to.deep.equal([
                    ['wrapper', 'walk'],
                    ['banner', 'hitTest'],
                ]);
                expect(popups[0].hitPoints).to.be.undefined;
                expect(popups[1].hitPoints).not.to.be.empty;
            });

            it('makes the consent popup found by hit-testing actionable', () => {
                container.innerHTML = ageGateWrapper(true);
                const actionable = inContainer(getActionablePopups('tier2', 1000, true));
                expect(actionable.map((p) => [p.element.id, p.regexClassification])).to.deep.equal([['banner', 'tier2']]);
            });

            it('reports the wrapper once when hit-testing also reaches it', () => {
                // the top grid row hits the age gate text, so the climb reaches the wrapper
                container.innerHTML = ageGateWrapper(false);
                const popups = inContainer(getPotentialPopups(1000, true));
                expect(popups.map((p) => [p.element.id, p.source])).to.deep.equal([['wrapper', 'walk']]);
                expect(popups[0].hitPoints).not.to.be.empty;
                expect(inContainer(getActionablePopups('tier2', 1000, true))).to.be.empty;
            });
        });

        it('keeps a banner with reject found by hit-testing next to its accept-only fragment found by the walk', () => {
            // the walk keeps the fixed bar, an accept-only fragment that passes on its own; hit-testing the reject button reaches the banner
            container.innerHTML = `
                <div id="banner" style="position: fixed; bottom: 0; left: 0; right: 0; height: 200px;">
                    <div id="bar" style="position: fixed; bottom: 120px; left: 0; right: 0; height: 40px;"><span>We use cookies to improve your experience.</span><button>Accept all</button></div>
                    <button style="position: absolute; bottom: 0; left: 0; width: 100%; height: 100px;">Reject all</button>
                </div>
            `;
            const popups = inContainer(getPotentialPopups(1000, true));
            expect(popups.map((p) => [p.element.id, p.source, p.regexClassification])).to.deep.equal([
                ['bar', 'walk', 'tier2'],
                ['banner', 'hitTest', 'reject'],
            ]);
            const actionable = inContainer(getActionablePopups('tier2', 1000, true));
            expect(actionable.map((p) => p.element.id)).to.deep.equal(['banner']);
        });
    });

    describe('order', () => {
        it('sorts actionable popups by classification, and keeps search order within one', () => {
            container.innerHTML = `
                <div id="accept1" style="position: fixed; top: 0;"><p>We use cookies on this website.</p><button>Accept all</button></div>
                <div id="ok" style="position: fixed; top: 100px;"><p>We use cookies on this website.</p><button>OK</button></div>
                <div id="accept2" style="position: fixed; top: 200px;"><p>We use cookies on this website.</p><button>Accept all</button></div>
            `;
            const searchOrder = inContainer(getPotentialPopups(1000))
                .filter((p) => p.regexClassification === 'tier2')
                .map((p) => p.element.id);
            expect(searchOrder).to.have.members(['accept1', 'accept2']);
            const popups = inContainer(getActionablePopups('tier2', 1000));
            expect(popups.map((p) => p.element.id)).to.deep.equal(['ok', ...searchOrder]);
        });
    });

    describe('labels', () => {
        it('labels every potential popup with a classification from its buttons', () => {
            container.innerHTML = fixedBanner('consent');
            // outside the container, so that the walk does not expand it to the container that holds the consent banner
            const chat = document.createElement('div');
            chat.innerHTML = '<div id="chat" style="position: fixed; top: 0;"><p>Chat with us</p><button>Start chat</button></div>';
            document.body.appendChild(chat);
            try {
                const labels = Object.fromEntries(
                    getPotentialPopups(1000)
                        .filter((p) => container.contains(p.element) || chat.contains(p.element))
                        .map((p) => [p.element.id, p.regexClassification]),
                );
                expect(labels).to.deep.equal({ consent: 'reject', chat: 'none' });
            } finally {
                chat.remove();
            }
        });
    });

    describe('hit-test grid and hit points', () => {
        const GRID = { columns: [0.25, 0.75], edgeRows: [40] };
        const columnXs = GRID.columns.map((c) => Math.round(c * window.innerWidth));

        function findGridPopup(id: string) {
            return getPotentialPopups(1000, true, GRID).find((p) => p.element.id === id);
        }

        it('records every grid point that reached an in-flow banner', () => {
            container.innerHTML = `<div id="banner" style="padding: 60px 0;">${BANNER}</div>`;
            const popup = findGridPopup('banner');
            expect(popup?.source).to.equal('hitTest');
            expect(popup!.hitPoints).to.deep.equal(columnXs.map((x) => [x, 40]));
        });

        it('keeps the walk candidate of a positioned popup, with its hit points', () => {
            container.innerHTML = `<div id="fixed" style="position: fixed; bottom: 0; left: 0; right: 0; padding: 30px 0;">${BANNER}</div>`;
            const popup = findGridPopup('fixed');
            expect(popup?.source).to.equal('walk');
            const bottomRow = Math.round(window.innerHeight - 40);
            expect(popup!.hitPoints).to.deep.equal(columnXs.map((x) => [x, bottomRow]));
        });

        it('leaves out hit points of a positioned popup that is not hit-tested', () => {
            container.innerHTML = fixedBanner('fixed');
            const popup = getPotentialPopups(1000).find((p) => p.element.id === 'fixed');
            expect(popup?.source).to.equal('walk');
            expect(popup!.hitPoints).to.be.undefined;
        });

        it('tests rows 30 and 90px from the edges by default', () => {
            // the banner lies between 100 and 200px from the top; the spacer is outside the container, so climbs from it stop at body
            const spacer = document.createElement('div');
            spacer.style.height = '100px';
            document.body.insertBefore(spacer, document.body.firstChild);
            document.body.style.margin = '0';
            container.innerHTML = `<div id="banner" style="height: 100px; overflow: hidden;">${BANNER}</div>`;
            try {
                expect(container.querySelector('#banner')!.getBoundingClientRect().top).to.equal(100);
                expect(inContainer(getPotentialPopups(1000, true))).to.have.length(0);
                const withRow150 = getPotentialPopups(1000, true, { columns: [0.1, 0.5, 0.9], edgeRows: [30, 90, 150] });
                expect(withRow150.map((p) => p.element.id)).to.include('banner');
            } finally {
                spacer.remove();
                document.body.style.margin = '';
            }
        });

        it('only tests the points of the grid it is given', () => {
            container.innerHTML = `<div id="banner" style="padding: 60px 0;">${BANNER}</div>`;
            expect(getPotentialPopups(1000, true, { columns: [0.5], edgeRows: [] }).map((p) => p.element.id)).not.to.include('banner');
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
