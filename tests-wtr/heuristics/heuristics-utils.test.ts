import { expect } from '@esm-bundle/chai';
import {
    checkHeuristicPatterns,
    cleanButtonText,
    isRejectButton,
    classifyButtons,
    isDisabled,
    excludeContainers,
    getButtonData,
} from '../../lib/heuristics';

describe('checkHeuristicPatterns', () => {
    it('detects cookie-related text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('We use cookies here', [/we use cookies/gi]);

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets.length).to.be.greaterThan(0);
    });

    it('returns empty arrays for unrelated text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('Welcome to our website', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('returns empty arrays for empty text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('does not match after the text limit', () => {
        const { patterns, snippets } = checkHeuristicPatterns('X'.repeat(100000) + 'We use cookies here', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });
});

describe('cleanButtonText', () => {
    it('converts to lowercase', () => {
        expect(cleanButtonText('REJECT ALL')).to.equal('reject all');
    });

    it('removes arrows and special characters', () => {
        expect(cleanButtonText('Reject All →')).to.equal('reject all');
        expect(cleanButtonText('« Reject »')).to.equal('reject');
        expect(cleanButtonText('Reject >')).to.equal('reject');
    });

    it('removes emojis', () => {
        expect(cleanButtonText('Reject 🍪')).to.equal('reject');
        expect(cleanButtonText('❌ Reject')).to.equal('reject');
    });

    it('normalizes whitespace', () => {
        expect(cleanButtonText('  Reject   All  ')).to.equal('reject all');
        expect(cleanButtonText('Reject\n\nAll')).to.equal('reject all');
    });

    it('handles empty string', () => {
        expect(cleanButtonText('')).to.equal('');
    });
});

describe('isRejectButton', () => {
    it('matches reject patterns', () => {
        expect(isRejectButton('let us Reject All cookies', [/reject all/gi])).to.be.true;
    });

    it('does not match never match patterns', () => {
        expect(isRejectButton('let us Reject All cookies', [/reject all/gi], [/let us/gi])).to.be.false;
    });

    it('returns false for empty string', () => {
        expect(isRejectButton('')).to.be.false;
    });

    it('supports exact strings', () => {
        expect(isRejectButton('let us reject all', ['let us reject all'])).to.be.true;
    });

    it('does not match substrings in case of exact strings', () => {
        expect(isRejectButton('let us reject all', ['reject'])).to.be.false;
    });
});

describe('classifyButtons', () => {
    it('separates reject buttons from other buttons', () => {
        const buttons = [
            { text: 'Accept All', element: document.createElement('button') },
            { text: 'Reject All', element: document.createElement('button') },
            { text: 'Settings', element: document.createElement('button') },
        ];

        const { rejectButtons, otherButtons } = classifyButtons(buttons);

        expect(rejectButtons).to.have.length(1);
        expect(rejectButtons[0].text).to.equal('Reject All');
        expect(otherButtons).to.have.length(2);
    });

    it('returns empty arrays for empty input', () => {
        const { rejectButtons, otherButtons } = classifyButtons([]);

        expect(rejectButtons).to.have.length(0);
        expect(otherButtons).to.have.length(0);
    });

    it('handles multiple reject buttons', () => {
        const buttons = [
            { text: 'Reject All', element: document.createElement('button') },
            { text: 'Deny', element: document.createElement('button') },
        ];

        const { rejectButtons, otherButtons } = classifyButtons(buttons);

        expect(rejectButtons).to.have.length(2);
        expect(otherButtons).to.have.length(0);
    });
});

describe('isDisabled', () => {
    it('returns true for button with disabled attribute', () => {
        const button = document.createElement('button');
        button.disabled = true;

        expect(isDisabled(button)).to.be.true;
    });

    it('returns false for enabled button', () => {
        const button = document.createElement('button');

        expect(isDisabled(button)).to.be.false;
    });

    it('returns true for element with disabled attribute (non-input)', () => {
        const div = document.createElement('div');
        div.setAttribute('disabled', '');

        expect(isDisabled(div)).to.be.true;
    });

    it('returns true for disabled input', () => {
        const input = document.createElement('input');
        input.disabled = true;

        expect(isDisabled(input)).to.be.true;
    });
});

describe('excludeContainers', () => {
    it('returns empty array for empty input', () => {
        expect(excludeContainers([])).to.have.length(0);
    });

    it('returns all elements if none contain others', () => {
        const el1 = document.createElement('div');
        const el2 = document.createElement('div');

        const result = excludeContainers([el1, el2]);

        expect(result).to.have.length(2);
    });

    it('excludes container elements', () => {
        const container = document.createElement('div');
        const child = document.createElement('button');
        container.appendChild(child);

        const result = excludeContainers([container, child]);

        expect(result).to.have.length(1);
        expect(result[0]).to.equal(child);
    });

    it('handles nested containers', () => {
        const outer = document.createElement('div');
        const middle = document.createElement('div');
        const inner = document.createElement('button');
        outer.appendChild(middle);
        middle.appendChild(inner);

        const result = excludeContainers([outer, middle, inner]);

        expect(result).to.have.length(1);
        expect(result[0]).to.equal(inner);
    });
});

describe('getButtonData', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('extracts button text', () => {
        container.innerHTML = '<button>Accept All</button><button>Reject All</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(2);
        expect(buttons.map((b) => b.text)).to.include('Accept All');
        expect(buttons.map((b) => b.text)).to.include('Reject All');
    });

    it('extracts input button values', () => {
        container.innerHTML = '<input type="submit" value="Submit" /><input type="button" value="Cancel" />';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(2);
        expect(buttons.map((b) => b.text)).to.include('Submit');
        expect(buttons.map((b) => b.text)).to.include('Cancel');
    });

    it('extracts link text', () => {
        container.innerHTML = '<a href="#">Click here</a>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Click here');
    });

    it('extracts role="button" text', () => {
        container.innerHTML = '<span role="button">Custom Button</span>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Custom Button');
    });

    it('extracts button-like classnames', () => {
        container.innerHTML = '<div class="button primary">Primary</div>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Primary');
    });

    it('ignores disabled buttons', () => {
        container.innerHTML = '<button disabled>Disabled</button><button>Enabled</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Enabled');
    });

    it('ignores hidden buttons', () => {
        container.innerHTML = '<button style="display:none">Hidden</button><button>Visible</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Visible');
    });

    it('ignores buttons without text', () => {
        container.innerHTML = '<button></button><button>Has Text</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Has Text');
    });

    it('returns empty array if no buttons found', () => {
        container.innerHTML = '<div>No buttons here</div>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(0);
    });

    it('trims button text', () => {
        container.innerHTML = '<button>  Spaced Text  </button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Spaced Text');
    });
});

